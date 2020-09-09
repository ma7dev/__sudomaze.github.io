# Usage:
# This adds a tag by the name `inline_css`. It takes one argument which is the
# path to a CSS file without any quotes:
#
# {% inline_css public/css/atf.css %}
#
# This would then read the file in the given directory relative to the root of
# the Jekyll installation and then embed that CSS at that location.
#
# Installation:
#
# Copy this file and place it under _plugins directory. Naming of the file
# doesn't matter
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