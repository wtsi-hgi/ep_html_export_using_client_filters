/*
 * Copyright (c) 2012 Genome Research Ltd.
 *
 * Author: Joshua C. Randall <jcrandall@alum.mit.edu>
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var domline = require('ep_etherpad-lite/static/js/domline').domline;
var linestylefilter = require('ep_etherpad-lite/static/js/linestylefilter').linestylefilter;

exports.getLineHTMLForExport = function(hook_name, context, cb) {
  console.debug("ep_html_export_using_client_filters.getLineHTMLForExport");
  var emptyLine = (context.text == '\n');
  var domInfo = domline.createDomLine(!emptyLine, true);
  linestylefilter.populateDomLine(context.text, context.attribLine, context.apool, domInfo);
  domInfo.prepareForAdd();
  var lineContent = domInfo.node.innerHTML;

  console.debug("ep_html_export_using_client_filters.getLineHTMLForExport: returning lineContent = %s", lineContent);

  return cb(lineContent+'<br/>');
}

