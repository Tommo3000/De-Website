# De-Website
Source code for the website.
Index.html contains the template for the the body of every page and with that the navigation bar.
Inside folders files corresponding to one item of the navigationbar are located. The following type of file:
- item.html: contains the code for initializing the page (must be present)
- item_content.html: contains the content of the item's page (must be present)
- item.css: contains formatting details of item_content.html
- media files for on the page

When adding a new page:
1. Create a new folder Page_name
2. From Template copy the file template.html as item_name.html and in that same folder create item_name_content.html and item.css.
3. In lines 11 and 32 of item_name.html, change the names of the files to the corresponding names you gave in step 2.
4. In index.html, add in the unordered list `<ul>` the item: `<li class="navbar_item"><a href="Page_name/item_name.html">NAVIGATION BAR ITEM NAME</a></li>`.
5. Adding any content to the page should be done in the Page_name/item_name_content.html file. This file does not need any initialization of html or body since it is directly included in the item_name.html file. For example, see Home/home_content.html. 

# Updating the RSS feed
Tutorial: https://pklucky.neocities.org/coding/rss-tutorial



