#!/usr/bin/env ruby

# Sphinxify - Converts (somewhat) PHP DocBlocks to syntax Sphinx understands
# Version 0.1

require './method_signature'

# Assume all arguments are filenames and loop over each
ARGV.each do |filename|

  # Pull the contents of each file in and then search for docblocks
  # We're assuming one level of indentation here, might be a bit brittle...
  contents = File.read(filename)
  contents.scan(/\t\/\*\*\n(.*?)\t \*\/\n\tpublic function ([A-Za-z_]*)\((.*?)\)/im) {|docblock, name, arguments|

    # Clean up the docblock a bit
    docblock.gsub!(/[\t\*]/, '').strip!

    method = MethodSignature.new

    method[:rtype] = 'Void'

    docblock.scan(/@return (.*?)(?:\s(.*))/i) { |rtype, returns|
      method[:rtype] = rtype
      method[:returns] = returns
    }

    docblock.gsub!(/^.*@return.*$/i, '')
    docblock.gsub!(/\n+/, "\n")

    method[:name] = name
    method[:arguments] = arguments
    method[:comment] = docblock

    puts method.render
  }
end