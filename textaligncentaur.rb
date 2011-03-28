require 'sinatra'
require 'haml'

before do
  response.headers['Cache-Control'] = 'public, max-age=604800' if production?
end

get '/' do
  haml :'/index'
end