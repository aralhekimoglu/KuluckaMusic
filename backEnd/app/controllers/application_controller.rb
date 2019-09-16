class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session, if:Proc.new { |c| c.request.format == 'application/json'}


  def cors_preflight_check

    headers['Access-Control-Allow-Origin'] = '*'
	headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
	headers['Access-Control-Request-Method'] = '*'
	headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    #render 'text/plain' => '', :content_type => 'text/plain'

  
end
end
