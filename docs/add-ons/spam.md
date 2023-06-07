<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Spam

[TOC]

ExpressionEngine includes a Spam Module that allows you to block spammy channel comments, forum posts, and member registrations. The Spam Module includes a library that exposes spam classification to third party developers. The Spam Module allows you to mark content flagged as spam as false positive which it then learns from, allowing the Spam Module to be tailored to your content.

## Usage

The Spam Module is enabled by default and can be accessed through the Add-on Manager. Any comments, forums posts, wiki posts, or member registrations that get flagged as spam will be displayed in the Spam Trap.

To get the most out of the Spam Module you will want to review any content flagged as spam as often as possible. You can mark anything that's not actually spam, and the content will be re-inserted. Once you're done flagging all of the false positives you can submit what's still in the Spam Trap. Once the Spam Trap has been submitted the Spam Module will retrain itself and improve its accuracy.

## Settings

The Spam Module has three important configuration settings:

### Sensitivity

The Spam Module works by calculating the probability that a piece of content is spam based on all the examples it's seen before. The sensitivity is the cutoff for what we consider spam. This defaults to 70 which means there has to be at least a 70% probability something is spam for it to get flagged. If this is higher you will have fewere false positives but more spam will slip through.

### Word Limit

This is the number of unique words the Spam Module keeps track of when learning from your Spam Trap. More words is more accurate, but this will slow down the Spam Module everytime it tries to classify content as spam.

### Content Limit

This is the maximum number of entries in your Spam Trap that the Spam Module will read when learning/re-training itself. The higher this is the more accurate the Spam Module will be, but re-training will take longer.
