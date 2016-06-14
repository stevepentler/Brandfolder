# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160614213325) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "options", force: :cascade do |t|
    t.integer "survey_id"
    t.string  "title"
    t.integer "tally",     default: 0
  end

  add_index "options", ["survey_id"], name: "index_options_on_survey_id", using: :btree

  create_table "surveys", force: :cascade do |t|
    t.integer "user_id"
    t.string  "name"
    t.boolean "active",     default: true
    t.string  "question"
    t.integer "expiration"
  end

  add_index "surveys", ["user_id"], name: "index_surveys_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer "option_id"
  end

  add_index "votes", ["option_id"], name: "index_votes_on_option_id", using: :btree

  add_foreign_key "options", "surveys"
  add_foreign_key "surveys", "users"
  add_foreign_key "votes", "options"
end
