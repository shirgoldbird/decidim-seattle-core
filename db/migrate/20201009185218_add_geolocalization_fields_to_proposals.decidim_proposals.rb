# frozen_string_literal: true
# This migration comes from decidim_proposals (originally 20170228105156)

class AddGeolocalizationFieldsToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :decidim_proposals_proposals, :address, :text
    add_column :decidim_proposals_proposals, :latitude, :float
    add_column :decidim_proposals_proposals, :longitude, :float
  end
end
