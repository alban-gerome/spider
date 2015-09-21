Spider
======

Introduction:
-------------

I have tried to write a spider to validate web analytics implementations since 2011. My first original attempt was using PHP, cURL and MySQL. It became clear that a script could analyse the scraped HTML it could not interpret and evaluate the content. The code for this first attempt is not included here.

I do not remember how I stumbled upon PhantomJS however PhantomJS can not only scrape the HTML content but also evaluate the Javascript code of the page you have just scraped. It also provides callbacks for HTTP requests and responses, capture page errors, save screenshots and so much more. QA teams have recognised the potential of PhantomJS already and are increasingly adding them to they toolbox. The potential for automating your web analytics implementations is phenomenal.

Basic requirements of a spider:
-------------------------------

* Start URL
* Domains to scan, your website will probably contain external URLs and we do not want the spider to start scanning the whole internet
* Extract all links on the page
* Convert the links found into absolute URLs
* Insert the converted links into a database but only if this is a new links
* Update the links in the database once they have been scanned
* Execute at least one audit task such as identifying whether your analytics tool has tracked the page

Current limitations:
--------------------

* Single Page Applications where the content may change dynamically but the URL remains the same
* Limited list of URL markers that will help the spider identify analytics tools implemented
* On an editorial website for example all articles will probably use the same template. The spider could offer a fast scan option by scanning only one article as a sample for all articles using the same template.

Potential complementary tools:
------------------------------

* We might need a companion tool which would let you record certain user actions and generate the Javascript code which represents these actions like a 'record macro' function in Excel. The spider then could execute the generate Javascript code on the sort of page that was tracked

MeasureCamp:
------------

The building blocks and a very basic demo of the spider was originally presented at MeasureCamp 7 in London on 19 September 2015. The original Powerpoint deck and PhantomJS code is in this repository.

The original deck can also be found at: http://www.slideshare.net/AlbanGrme/using-phantom-js-to-qa-your-analytics-implementation

More details about MeasureCamp can be found at http://www.measurecamp.org


Alban Gérôme
21 September 2015
