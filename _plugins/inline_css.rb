module Jekyll
  class InlineCssTag < Liquid::Tag
    def initialize(tag_name, path_to_atf_css, tokens)
      super
      full_path_to_atf_css = File.expand_path(path_to_atf_css.gsub("\"", '').strip)
      @atf_css_raw = File.read(full_path_to_atf_css)
    end

    def render(context)
      source = '<style type="text/css">'
      source += @atf_css_raw
      source += '</style>'
    end
  end
end

Liquid::Template.register_tag('inline_css', Jekyll::InlineCssTag)