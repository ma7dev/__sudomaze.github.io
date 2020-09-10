module Jekyll
  class InlineJsTag < Liquid::Tag
    def initialize(tag_name, path_to_atf_js, tokens)
      super
      full_path_to_atf_js = File.expand_path(path_to_atf_js.gsub("\"", '').strip)
      @atf_js_raw = File.read(full_path_to_atf_js)
    end

    def render(context)
      source = '<script type="text/javascript">'
      source += @atf_js_raw
      source += '</script>'
    end
  end
end
  
Liquid::Template.register_tag('inline_js', Jekyll::InlineJsTag)