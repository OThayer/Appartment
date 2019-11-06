class RequestSerializer < ActiveModel::Serializer
  attributes :desc_snip, :work_type, :user_id, :current_user, :review_date

  def current_user
    scope[:current_user]
  end

  def review_date
    "#{object.created_at.strftime("%B %d, %Y - %I:%M%P")}"
  end

  def desc_snip
    "#{object.description.at(0..40)}..."
  end
end
