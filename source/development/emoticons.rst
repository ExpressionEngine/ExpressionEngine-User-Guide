#####################################
ExpressionEngine Emoticon Development
#####################################

.. highlight:: php

Modifying or creating new sets of Emoticons for use with
ExpressionEngine is fairly straightforward. Glyph translations are
contained in the ``/system/addons/emoticon/emoticons.php`` file. This
file contains an array, ``$smileys`` that provides instructions as to
what glyphs should be replaced by which images, and what the properties
of the image files are. The files themselves can be replaced or modified
so that completely different Emoticon packs can be created and used.

*********************
Default Smileys Array
*********************

::

  $smileys = array(
  //  smiley                    image name            width   height  alt
      ':-)'           =>  array('grin.gif',           '19',   '19',   'grin'),
      ':lol:'         =>  array('lol.gif',            '19',   '19',   'LOL'),
      ':cheese:'      =>  array('cheese.gif',         '19',   '19',   'cheese'),
      ':)'            =>  array('smile.gif',          '19',   '19',   'smile'),
      ';-)'           =>  array('wink.gif',           '19',   '19',   'wink'),
      ';)'            =>  array('wink.gif',           '19',   '19',   'wink'),
      ':smirk:'       =>  array('smirk.gif',          '19',   '19',   'smirk'),
      ':roll:'        =>  array('rolleyes.gif',       '19',   '19',   'rolleyes'),
      ':-S'           =>  array('confused.gif',       '19',   '19',   'confused'),
      ':wow:'         =>  array('surprise.gif',       '19',   '19',   'surprised'),
      ':bug:'         =>  array('bigsurprise.gif',    '19',   '19',   'big surprise'),
      ':-P'           =>  array('tongue_laugh.gif',   '19',   '19',   'tongue laugh'),
      '%-P'           =>  array('tongue_rolleye.gif', '19',   '19',   'tongue rolleye'),
      ';-P'           =>  array('tongue_wink.gif',    '19',   '19',   'tongue wink'),
      ':P'            =>  array('rasberry.gif',       '19',   '19',   'rasberry'),
      ':blank:'       =>  array('blank.gif',          '19',   '19',   'blank stare'),
      ':long:'        =>  array('longface.gif',       '19',   '19',   'long face'),
      ':ohh:'         =>  array('ohh.gif',            '19',   '19',   'ohh'),
      ':grrr:'        =>  array('grrr.gif',           '19',   '19',   'grrr'),
      ':gulp:'        =>  array('gulp.gif',           '19',   '19',   'gulp'),
      '8-/'           =>  array('ohoh.gif',           '19',   '19',   'oh oh'),
      ':down:'        =>  array('downer.gif',         '19',   '19',   'downer'),
      ':red:'         =>  array('embarrassed.gif',    '19',   '19',   'red face'),
      ':sick:'        =>  array('sick.gif',           '19',   '19',   'sick'),
      ':shut:'        =>  array('shuteye.gif',        '19',   '19',   'shut eye'),
      ':-/'           =>  array('hmm.gif',            '19',   '19',   'hmmm'),
      '>:('           =>  array('mad.gif',            '19',   '19',   'mad'),
      ':mad:'         =>  array('mad.gif',            '19',   '19',   'mad'),
      '>:-('          =>  array('angry.gif',          '19',   '19',   'angry'),
      ':angry:'       =>  array('angry.gif',          '19',   '19',   'angry'),
      ':zip:'         =>  array('zip.gif',            '19',   '19',   'zipper'),
      ':kiss:'        =>  array('kiss.gif',           '19',   '19',   'kiss'),
      ':ahhh:'        =>  array('shock.gif',          '19',   '19',   'shock'),
      ':coolsmile:'   =>  array('shade_smile.gif',    '19',   '19',   'cool smile'),
      ':coolsmirk:'   =>  array('shade_smirk.gif',    '19',   '19',   'cool smirk'),
      ':coolgrin:'    =>  array('shade_grin.gif',     '19',   '19',   'cool grin'),
      ':coolhmm:'     =>  array('shade_hmm.gif',      '19',   '19',   'cool hmm'),
      ':coolmad:'     =>  array('shade_mad.gif',      '19',   '19',   'cool mad'),
      ':coolcheese:'  =>  array('shade_cheese.gif',   '19',   '19',   'cool cheese'),
      ':vampire:'     =>  array('vampire.gif',        '19',   '19',   'vampire'),
      ':snake:'       =>  array('snake.gif',          '19',   '19',   'snake'),
      ':exclaim:'     =>  array('exclaim.gif',        '19',   '19',   'exclaim'),
      ':question:'    =>  array('question.gif',       '19',   '19',   'question') // no comma after last item
  );


smiley
------

The glyph / text you wish to be replaced by a particular smiley

image name
----------

The file name for the smiley image

width
-----

The width, in pixels, of the smiley image

height
------

The height, in pixels, of the smiley image

alt
---

The text that will be used for the image ``alt=""`` attribute

***************
Emoticon Images
***************

The file names in the ``$smileys`` array correspond to the files in the
directory specified as the "smilies" directory in the Control Panel at
:menuselection:`Admin --> Emoticon Preferences`.
