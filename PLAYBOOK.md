# Playbook
Common tasks and fixes to keep the system running

## Image Link Broken
[Open Trello issue](https://trello.com/c/030MTiMv/62-images-links-become-broken-in-staging)

If an image used as one of the Decidim system images is deleted from the S3 bucket, the Decidim admin panel will not allow removing that image from the page it's used on or making any other edits to the page. The fix is to use the Decidim admin panel to upload a new image to that page with the same name.

## Adding or Removing Locales
To add or remove locales, you'll need to change the configuration in two spots, and then reset the search cache.

1. Make the changes to the locales in config/initializers/decidim.rb `config.available_locales`.
2. Copy and run the code in this [unreleased admin script](https://github.com/decidim/decidim/blob/develop/decidim-core/lib/tasks/decidim_locales_tasks.rake) within a Rails console session.

TODO: Once we upgrade to Decidim 0.23, we should be able to just follow the directions in [Fixing Locales](https://github.com/decidim/decidim/blob/6731a775b86de9b6ddfe2fa3400860fad8b095fd/docs/advanced/fixing_locales.md)
