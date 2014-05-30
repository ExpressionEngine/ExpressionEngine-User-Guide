import re
import copy

from pygments.lexer import DelegatingLexer, RegexLexer, bygroups, include
from pygments.token import Text, Comment, Operator, Keyword, Name, String, \
	 Number, Other, Punctuation, Literal
from pygments.lexers.templates import HtmlPhpLexer

__all__ = ['ExpressionEngineLexer']


class ExpressionEngineLexer(DelegatingLexer):
	"""
	For ExpressionEngine Tags and Variables. HTML, PHP, JavaScript, and CSS is highlighted
	by the HtmlPhpLexer.
	"""

	name = 'ExpressionEngine'
	aliases = ['ee', 'expressionengine']
	filenames = ['*.html', '*.css', '*.php', '*.xml', '*.static']
	mimetypes = ['text/html', 'application/xhtml+xml']

	def __init__(self, **options):
		super(ExpressionEngineLexer, self).__init__(HtmlPhpLexer, ExpressionEngineTagsLexer, **options)


class ExpressionEngineTagsLexer(RegexLexer):

	name = 'ExpressionEngine'
	aliases = ['eetags']
	filenames = ['*.html', '*.htm', '*.xhtml', '*.xslt']
	mimetypes = ['text/html', 'application/xhtml+xml']

	flags = re.IGNORECASE | re.DOTALL | re.MULTILINE

	tokens = {
		'root': [
			# Find a {
			(r'[^{]+', Other),
			# Comments
			(r'{!--.*?--}', Comment.Multiline),
			# Conditionals
			(r'(\{)(/)?(if(?:\:else(?:if)?)?)(\s*)', bygroups(Punctuation, Name.Function, Keyword, Text), 'conditional'),
			# Tags
			(r'(\{)(/)?(\w*[a-zA-Z_:]+\w*)(\s*)', bygroups(Punctuation, Name.Function, Name.Function, Text), 'tag'),
			# Not EE
			(r'\{', Other)
		],
		'strings': [
			(r'"(\\\\|\\"|[^"])*"', String.Double),
			(r"'(\\\\|\\'|[^'])*'", String.Single),
		],
		'values': [ # numbers, strings, booleans, variables
			(r'\b(\d+\.\d*|\d*\.\d+|\d+)\b', Number),
			include('strings'),
			(r'(true|false)\b', Keyword.Pseudo),
			(r'\w*([a-zA-Z]([\w:-]+\w)?|(\w[\w:-]+)?[a-zA-Z])\w*', Name.Variable),
		],
		'tag': [
			(r'\s+', Text),
			(r'\}', Punctuation, '#pop'),
			(r'\w*([a-zA-Z]([\w:-]+\w)?|(\w[\w:-]+)?[a-zA-Z])\w*', Name.Attribute),
			(r'=', Punctuation),
			include('strings'),
		],
		'conditional': [
			(r'\s+', Text),
			(r'\}', Punctuation, '#pop'),
			(r'(or|and|xor)\b', Operator),
			(r'[=!|<>!&%~\(\)\$\^\*\+\-]+', Operator),
			include('values'),
		]
	}