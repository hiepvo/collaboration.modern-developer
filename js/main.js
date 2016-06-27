/**
 * Created by hiepvo on 6/26/16.
 */
var editor = ace.edit("editor");
editor.session.setUseWrapMode(true);
ace.config.set('basePath', 'js/ace/src-noconflict');
editor.setTheme("ace/theme/clouds");
editor.getSession().setMode("ace/mode/html");