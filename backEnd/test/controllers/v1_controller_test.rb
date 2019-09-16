require 'test_helper'

class V1ControllerTest < ActionDispatch::IntegrationTest
  test "should get songs" do
    get v1_songs_url
    assert_response :success
  end

end
