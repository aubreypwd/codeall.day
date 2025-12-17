# _plugins/base64_filter.rb
require "base64"

module Base64Filter
  # {{ "images/webp/aubrey-portwood.webp" | base64_image_src }}
  def base64_image_src(path)
    return "" if path.nil?

    path = path.to_s.strip
    return "" if path.empty?

    site_source = @context.registers[:site].source
    full_path = File.expand_path(path, site_source)

    unless full_path.start_with?(File.expand_path(site_source) + File::SEPARATOR)
      raise "base64_image_src: path is outside site source: #{path}"
    end

    "data:image/octet-stream;base64,#{Base64.strict_encode64(File.binread(full_path))}"
  end
end

Liquid::Template.register_filter(Base64Filter)
