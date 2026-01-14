# Custom include_relative tag that supports parent directory navigation (../)
# This allows include_relative to work from subdirectories

module Jekyll
	class IncludeRelativeSafeTag < Liquid::Tag
		def initialize(tag_name, markup, options)
			super
			@file = markup.strip
		end

		def render(context)
			site = context.registers[:site]
			page = context.registers[:page] || {}

			# Get the page path - Jekyll stores this in page["path"]
			page_path = page["path"]
			
			# If we don't have a path, try to find it from the URL
			unless page_path
				page_url = page["url"].to_s
				# Remove leading slash and find matching page
				page_url = page_url.sub(%r!^/!, "")
				page_file = site.pages.find { |p| 
					p.url == "/#{page_url}" || 
					p.url == "/#{page_url}/" ||
					(p.url.sub(%r!^/!, "") == page_url)
				}
				page_path = page_file.path if page_file
			end

			# Get the directory of the current page file
			if page_path
				# page_path is relative to site.source
				page_full_path = File.expand_path(page_path, site.source)
				page_dir = File.dirname(page_full_path)
			else
				# Fallback: use site source as base
				page_dir = site.source
			end

			# Resolve the relative path (handles ../)
			target_path = File.expand_path(@file, page_dir)

			# Security: ensure the target is within the site source
			site_source = File.expand_path(site.source)
			unless target_path.start_with?(site_source + File::SEPARATOR) || target_path == site_source
				Jekyll.logger.warn "IncludeRelativeSafe: Path outside site source: #{@file}"
				return ""
			end

			# Read and return the file content
			if File.exist?(target_path)
				File.read(target_path)
			else
				Jekyll.logger.warn "IncludeRelativeSafe: File not found: #{target_path}"
				""
			end
		end
	end
end

Liquid::Template.register_tag("include_relative_safe", Jekyll::IncludeRelativeSafeTag)

