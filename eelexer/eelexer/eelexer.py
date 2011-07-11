import re
import copy

from pygments.lexer import DelegatingLexer, RegexLexer, bygroups
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
			(r'[^\{]+', Other),
			(r'{!--.*?--}', Comment.Multiline),																# Comments
			(r'({)(/)?([a-z0-9_-]+)(})', bygroups(Punctuation, Name.Variable, Name.Variable, Punctuation)),	# Run of the mill single and pair variables
			(r'({)(if)(\s)+', bygroups(Punctuation, Name.Tag, Text), 'conditional'),
			(r'({)(/)?([a-z0-9:_-]+)(\s*)', bygroups(Punctuation, Name.Function, Name.Function, Text), 'tag'),		# Plugin and Module tags
			(r'{', Other)																					# Doesn't look like EE, leave it alone
		],
		'path': [
			(r'\s+', Text),
			(r'".*?"', String, '#pop'),
			(r"'.*?'", String, '#pop'),
			(r'(\s*)(})', bygroups(Text, Punctuation), '#pop'),
		],
		'conditional': [
			(r'[=!<>:&|]+\s*', Operator, 'attr'),
			(r'([a-z0-9_:-]+)(\s*)', bygroups(Name.Attribute, Text)),
			(r'}', Punctuation, '#pop'),
		],
		'tag': [
			(r'\s+', Text),
			(r'=', Punctuation, 'attr'),
			(r'([a-z0-9_:-]+)(\s*)(=)', bygroups(Name.Attribute, Text, Punctuation), 'attr'),
			(r'(\s*)(})', bygroups(Text, Punctuation), '#pop'),
		],
		'attr': [
			(r'".*?"', String, '#pop'),
			(r"'.*?'", String, '#pop'),
			(r'[^\s\}]+', String, '#pop'),
		],
	}
