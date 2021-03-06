# decidim_application

Free Open-Source participatory democracy, citizen participation and open government for cities and organizations

This is the open-source repository for decidim_application, based on [Decidim](https://github.com/decidim/decidim).

## Setting up the application

You will need to do some steps before having the app working properly once you've deployed it:

1. Open a Rails console in the server: `bundle exec rails console`
2. Create a System Admin user:
```ruby
user = Decidim::System::Admin.new(email: <email>, password: <password>, password_confirmation: <password>)
user.save!
```
3. Visit `<your app url>/system` and login with your system admin credentials
4. Create a new organization. Check the locales you want to use for that organization, and select a default locale.
5. Set the correct default host for the organization, otherwise the app will not work properly. Note that you need to include any subdomain you might be using.
6. Fill the rest of the form and submit it.

You're good to go!

## Running with Docker
After installing [Docker](https://docs.docker.com/get-docker/), run


```
docker-compose up
```

Database migrations and seeds will automatically be run if needed,
so your instance should always be up to date.

To run a one off command, like the Rails console, you can use the
[docker-compose `exec` command](https://docs.docker.com/compose/reference/exec/):

```
docer-compose up
docker-compose exec app bin/rails console
```
