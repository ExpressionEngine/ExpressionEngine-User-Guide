import re
import copy

from pygments.lexer import DelegatingLexer, RegexLexer
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

	flags = re.IGNORECASE | re.DOTALL
	tokens = {
		'root': [
			('[^\{]+', Other),
			('\{!--', Comment, 'comment'),
			(r'\{[a-zA-Z0-9_:-]+\}', Name.Variable),
			(r'\{[a-zA-Z0-9_:]+\s*=', Name.Function, 'eepath'),
			(r'\{[a-zA-Z0-9_:]+', Name.Function, 'eetag'),
			(r'\{/[a-zA-Z0-9_:]+\}', Name.Function),
		],
		'eepath': [
			(r'\s+', Text),
			('".*?"', String, '#pop'),
			("'.*?'", String, '#pop'),
			(r'[a-zA-Z0-9_:/-]+', Name.Attribute, 'attr'),
			(r'\s*\}', Name.Function, '#pop'),
		],
		'eetag': [
			(r'\s+', Text),
			(r'[\'\"a-zA-Z0-9_:-]+\s*[=!><]+\s*', Name.Attribute, 'attr'),
			(r'\s*\}', Name.Function, '#pop'),
		],
		'comment': [
			('[^-]+', Comment),
			('--}', Comment, '#pop'),
			('-', Comment),
		],
		'attr': [
			('".*?"', String, '#pop'),
			("'.*?'", String, '#pop'),
			(r'[^\s\}]+', String, '#pop'),
		],
	}
