# ContactsDirectory
Simple Contacts Directory Application Created By [@BaddourAbdallah](http://twitter.com/baddourabdallah) Using [Ionic Framework](http://ionicframework.com/)

<b>To setup the app:</b>

1.First create a new blank ionic project:
```bash
$ ionic start [appname] blank
```
2.Replace folders/files of my project in the blank project you just create in the <b>www</b> folder.

3.Install [ngCordova](http://ngcordova.com/docs/install/).

4.Install [SQLite](http://ngcordova.com/docs/plugins/sqlite/) plugin.

5.Install [whitelist](https://github.com/apache/cordova-plugin-whitelist) plugin:
```bash
$ ionic plugin add https://github.com/apache/cordova-plugin-whitelist.git
```
Add these 2 lines in <b>config.xml</b> below:
```bash
<access origin="*"/>
```
```bash
  <access origin="tel:*" launch-external="yes" />
  <access origin="mailto:*" launch-external="yes" />
```
6.Insatll [ngMessages](https://docs.angularjs.org/api/ngMessages)

7.Insatll sass:
```bash
$ ionic setup sass
```
8.To build and run the app on android:
```bash
$ ionic platform add android
$ ionic run android
```

#License
See the [LICENSE](https://github.com/AbdallahBaddour/ContactsDirectory/blob/master/LICENSE.md) file for license rights and limitations (MIT).
