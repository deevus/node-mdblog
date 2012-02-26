---
layout: post
title: Tango to go public domain?
---
In the previous post I hinted that the <a href="http://tango.freedesktop.org" title="Tango Desktop Project homepage">Tango Desktop Project</a> icon set would be re-licensed into the public domain. The news came through at the start of <acronym title="GNOME Users&rsquo; and developers&rsquo; Europe conference">GUADEC</acronym> 2008 over the <a href="http://lists.freedesktop.org/mailman/listinfo/tango-artists" title="Tango Artists mailing list info page on freedesktop.org">tango-artists</a> mailing list. This somewhat lengthy article should set straight what Tango is, what its goals are, some of the hiccups that we've encountered along the way and the imminent future of a possible re-licensing into the public domain.

<img src="/files/images/tango-example-16x.png" alt="Example of the Tango icon set 16&times;16 versions" title="Example of the Tango icon set 16&times;16 versions" width="624" height="310" />

<p class="caption"><strong>tango!</strong>&thinsp;&mdash;&thinsp;the 16&times;16 Tango icons.</p>

### Tango?
The Tango icon theme was the first icon theme to follow <a href="http://tango.freedesktop.org/Tango_Icon_Theme_Guidelines" title="Tango icon style guide on the Tango Desktop Project homepage">the Tango style guide</a> and use the <a href="http://standards.freedesktop.org/icon-theme-spec/icon-theme-spec-latest.html" title="freedesktop.org icon naming specification">freedesktop.org icon naming specification</a>. The style guide was introduced to give artists a guideline to work from so that icons across the free desktop would have a unified and clean look, but also adhere to a common and well-defined set of visual metaphors. The naming specification was an attempt to create a standard method of naming icons in an icon set such that various desktop environments and programs (<a href="http://en.wikipedia.org/wiki/GNOME" title="Wikipedia: GNOME"><acronym title="GNU Network Object Model Environment">GNOME</acronym></a>, <a href="http://en.wikipedia.org/wiki/XFCE" title="Wikipedia: Xfce">Xfce</a> and even <a href="http://en.wikipedia.org/wiki/KDE" title="Wikipedia: KDE"><acronym title="K Desktop Environment">KDE</acronym></a>) could use them, battling the otherwise gratuitous renaming of files.

<p class="note">The idea behind an icon set is to avoid redundancy. For example the &ldquo;save&rdquo; icon would be consistent across all applications that utilize the save function, and would only require one icon&thinsp;&mdash;&thinsp;in this case <code>document-save</code>, by the icon naming specification. Before, each application would ship their own icons, which can cause redundancy and also forbids the user from changing the style of their desktop easily through different icon sets. Many applications still ship their own icons. <span class="sidenote">Applications that ship their own hard-coded icons do so because there isn&rsquo;t an icon theme-ing feature that would find the appropriate icon for the given feature for that desktop environment (or at least not without third-party theme-ing programs), because the developer does not know a theme and icon specification exists or because there is no entry for that function in the icon specification.</span></p>

### Licensing issues
The Tango icon theme was licensed under the <a href="http://creativecommons.org/licenses/by-sa/2.5/" title="License page for the Creative Commons Attribution-ShareAlike 2.5 License on CreativeCommons.org">Creative Commons Attribution-ShareAlike 2.5 License</a>, which promoted the usage and editing of the icons, provided all use cases and derivatives were documented with an original author note and generally a link-back to the Tango Desktop Project homepage. In addition, derivatives had to be licensed under the same license as the original work i.e. derivative works of the Tango icons would also have to be licensed under the <acronym title="Creative Commons">CC</acronym> Attribution-ShareAlike 2.5 license.

Everything was dandy. The project received a good share of media attention and promotion&thinsp;&mdash;&thinsp;it even was on <a href="http://slashdot.org" title="Slashdot technology news homepage">Slashdot</a> a few times. After a while though some issues started to arise:

* The <a href="http://www.fsf.org/" title="Free Software Foundation homepage">Free Software Foundation</a> indicated that the <acronym title="Creative Commons">CC</acronym> Attribution-ShareAlike 2.5 license and their <acronym title="GNU is Not UNIX">GNU</acronym> General Public License (<acronym title="General Public License">GPL</acronym>) was not compatible&thinsp;&mdash;&thinsp;developers could not ship Tango icons with their <acronym title="General Public License">GPL</acronym>-licensed code. Furthermore the Debian Free Software Guidelines (<acronym title="Debian Free Software Guidelines">DFSG</acronym>) noted the same thing, and would shift free software shipping with Tango icons or derivatives of Tango icons (such as custom icons created for features that weren't covered by the icon specification) from the general repository to the non-free repository.
* Artists could not mix Tango icons with icons from the <acronym title="GNU Network Object Model Environment">GNOME</acronym> icon theme that was being redone to follow the Tango style guide, as the <acronym title="GNU Network Object Model Environment">GNOME</acronym> icon theme is licensed under the <acronym title="General Public License">GPL</acronym>. I experienced some of the licensing issues myself as I created icons for Bazaar's graphical front-end application, Olive (bzr-gtk) last year. (<a href="http://en.wikipedia.org/wiki/Bazaar_(software)" title="Bazaar project homepage">Bazaar</a> is a <a href="http://en.wikipedia.org/wiki/Revision_control#Distributed_revision_control" title="Wikipedia: distributed version control systems">distributed version control system</a>.)
* Through the media attention Tango received, numerous websites including professional business websites and/or their application(s) began using the Tango icons without attribution, in some cases fully claiming the icons as their own.

###Tango and the public domain
Once the Tango icon theme was complete&thinsp;&mdash;&thinsp;i.e. there were icons at all required sizes for each entry in the icon specification&thinsp;&mdash;&thinsp;it was essentially deprecated. We recommended artists and developers alike to use and build on the <acronym title="GNU Network Object Model Environment">GNOME</acronym> icon theme, as it was licensed under the <acronym title="General Public License">GPL</acronym>; we cared less about third parties that wanted to use the icons on their website and in their products&thinsp;&mdash;&thinsp;after all the Tango icon theme was still there for them and all they were required to do was provide attribution and share-alike (as before).

Until now we have just been promoting Tango as an example icon set that complies to the icon naming specification and conforms to the Tango style guide. However, this might now change! With the licensing issues constantly rearing their heads we have discussed the possibility of re-licensing the Tango icon theme to deal with the above mentioned problems. This was until now considered an arduous and unlikely task as numerous artists had contributed to the theme and each would have to agree to re-license their respective contributions (an issue that many larger free software projects face when re-licensing) and in particularly because some of the artists were working for Novell at the time of their contributions (who subsequently owned the rights to the work). <a href="http://jimmac.musichall.cz/" title="Jakub Steiner’s personal website">Jakub Steiner</a> had a lengthy dialogue with the Novell legal and open source review board who have just agreed to re-license its share of the theme into the public domain (much of which was performed by Jakub himself, as he worked for Novell; the man deserves many beers).

#### Implications
This fixes all of the licensing issues, but raised the question of usage. Ideally it would be nice to be attributed in some respect however legally anyone can claim authorship over the icons in derivatives and even simple use cases. I don’t think this is much of an issue as a large number of use cases lacked attribution in the first place and this was almost impossible to combat&thinsp;&mdash;&thinsp;we don't want to hunt down unattributed use cases or derivatives, and ultimately a library of free icons could still give Tango and free software a lot of public attention.

I discussed the re-licensing briefly with <a href="http://andy.brisgeek.com/" title="Andy Fitzsimon’s personal blog">Andy Fitzsimon</a> at <acronym title="GNOME users’ and developer’s Europe conference">GUADEC</acronym> and he noted this would be great as there would be a large pool of public domain shapes and elements to draw from for future icons. Rodney Dawes made a similar observation and recommended we shouldn’t release the icon set as-is into the public domain, instead:

<blockquote cite="Rodney Dawes">
    <p>&hellip;create a new repository which houses the Public Domain elements which make up the icons we offer in tango-icon-theme. This new module could be tango-icon-assets or something similar, and would contain just the assets in <acronym title="Scalable Vector Graphic">SVG</acronym> form (in the one-canvas workflow style), such as &lsquo;paper sheet&rsquo; and &lsquo;error emblem&rsquo;. Everything in this module would be Public Domain, and there would be no need for any build system work at all, as it is purely a repository of building blocks for creating full icons.</p>

    <p>From there, we can make tango-icon-theme into an <acronym title="Lesser General Public License">LGPL</acronym> icon theme, made up of the public domain assets. This module would provide a clearer licensing scheme, for developers to be confident about using our icons. This would also provide a nice method of allowing contributors to submit icons based off the tango assets for inclusion, but who do not wish to relinquish copyright in doing so. There icons could be <acronym title="Lesser General Public License">LGPL</acronym>, yet the parts that comprise them, could be Public Domain, save for minor differences.</p>

    <p>We could also pull over some of the Public Domain assets into other icons and themes, such as OpenOffice.org and gnome-icon-theme, without issue. The paper sheet for example would be a great place to start doing that.</p>
</blockquote>

### Tango's future
Jakub has emailed all the other contributors of the Tango icon theme requesting their response regarding the re-license, and thus far everyone seems in agreement with Jakub's and Rodney's proposal. So, look forward to a public domain Tango assets library and <em>TangoNG</em>, a "next generation" Tango icon theme.