require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DecidimApplication
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Add the override translations to the load path
    config.i18n.load_path += Dir[
      Rails.root.join("config", "locales", "crowdin-master/*.yml").to_s,
      Rails.root.join("config", "locales", "overrides/*.yml").to_s,
    ]

    # Configure an application wide address suffix to pass to the geocoder.
    # This is to make sure that the addresses are not incorrectly mapped outside
    # of the wanted area. (e.g., "Helsinki, Finland")
    config.address_suffix = "Seattle, Washington, United States"

    config.after_initialize do
      # Override the main menu
      # Decidim::MenuRegistry.create(:menu)
      # Decidim.menu :menu do |menu|
      #   menu.item I18n.t("menu.home", scope: "decidim"),
      #             decidim.root_path,
      #             position: 1,
      #             active: :exact
      #
      #   menu.item I18n.t("menu.processes", scope: "decidim"),
      #             decidim_participatory_processes.participatory_processes_path,
      #             position: 2,
      #             active: :inclusive
      #
      #   menu.item I18n.t("menu.more_information", scope: "decidim"),
      #             decidim.pages_path,
      #             position: 3,
      #             active: :inclusive
      # end

      Decidim::ParticipatoryProcesses::ParticipatoryProcessesController.send(:include, ParticipatoryProcessesControllerExtensions)
    end
  end
end
