---
layout: post
title: "Getting friends with IRC"
date: 2014-07-09
---

Internet Relay Chat or popularly known as IRC is (as [Wikipedia](http://en.wikipedia.org/wiki/Internet_Relay_Chat) defines):

> an application layer protocol that facilitates transfer of messages in the form of text. 

The communication takes place between IRC clients via server. Different IRC clients like [xChat](http://xchat.org/), [mIRC](http://www.mirc.com/), [ChatZilla](http://chatzilla.hacksrus.com/), and many [others](http://en.wikipedia.org/wiki/Comparison_of_Internet_Relay_Chat_clients) are software applications which run on your local computer and connect to an online server when you desire. The server manages the traffic and provides clean duplex communication.

A group of people talking on the same topic form a channel. Channel's name is preceded by a `#` symbol like `#github`, `#jekyll`, or `##java`. You can join a channel by clicking on "Join a Channel" under server option in xChat or by manually typing

`/join <#channelname>`

###Registering::

Although many servers do not require you to register a nick but it is a good practice to register one for yourself. Doing so will reserve your nick for you. To register type:

`/msg NickServ register <password> <email>`

Next, check the email you provided for a message from the server. Use that message to verify yourself. Once the server confirms the message, your nick has been resistered. Identify yourself everytime to protect your nick from getting removed by the freenode staff. Type:

`/msg NickServ identify <password>`

An important security tip here to follow is to enable `enforce` so that nobody else can claim your nick.

`/msg NickServ set enforce on`

Like any other online platform that requires registration, here too you need to change your password frequently. Type:

`/msg NickServ set password <new-password>`

It is good to keep eyes on your account activity so that you know who last logged in with your account and when:

`/msg NickServ info <nick>`

This will reveal a list of data that includes the nick's registration date, last address, last seen and few other data.

###Quoting::

When you want to mention someone in your message just include his `nick` in your message. However, If you want to ask or reply to somebody it is better to include the `nick` as the first word in your message.

###Quitting::
 When you are done chatting on IRC and want to quit the channel just type `/quit`. Make sure you `/quit` before you leave else a ghost of your nick will be activated. When you login again an underscore will be added after your nick. To get your nick back type:

 `/msg NickServ ghost <nick> <password>`