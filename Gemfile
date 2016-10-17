source 'https://rubygems.org'
ruby '2.2.0'

gem 'rails', '4.2.1'
gem 'pg'
# gem 'jbuilder', '~> 2.0'
# gem 'sdoc', '~> 0.4.0', group: :doc
# gem 'omniauth', '~> 1.2.2'
# gem 'faker', '~> 1.5.0'

group :development, :test do
  # gem 'rspec-rails', '3.2.1'
  # gem 'capybara', '~> 2.4.4'
  # gem 'byebug'
  gem 'better_errors', '~>2.1.1'
  gem 'database_cleaner'
  gem 'rubocop', require: false
  gem 'guard-bundler', '2.1.0'
  gem 'guard-rspec', '4.5.0', require: false
  gem 'guard-rubocop', '1.2.0', require: false
  gem 'guard-livereload', '2.5.1', require: false
  gem 'dotenv-rails', '2.0.2'
end

group :test do
  # gem 'factory_girl_rails', '4.4.1'
  # gem 'shoulda-matchers', '2.8.0'
end

group :production do
    gem 'rails_12factor'
    gem 'newrelic_rpm', '3.14.0.305'
end
