/*
 * Copyright (C) 2014  Srijan R Shetty <srijan.shetty+code@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var http = require('http');

var app = http.createServer(function(req, res) {
    console.log('Request URL ' + req.url);
    console.log('Request Method ' + req.method);
    console.log('Request Headers' + JSON.stringify(req.headers));

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Yellow');
});

app.listen(process.env.PORT || 3000, 'localhost');
