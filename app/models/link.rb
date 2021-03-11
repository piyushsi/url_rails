
class Link < ActiveRecord::Base
    before_validation :generate_slug
  
    validates :slug, presence: true, uniqueness: true
    validates :url, presence: true, length: { maximum: 255 }, format: URI::regexp(%w[http https])
  
    def generate_slug
      if slug
      else
      loop do
        self.slug = [ *(SecureRandom.random_number(10)..SecureRandom.random_number(10)),*("a".."z")].shuffle[0, 5].join
        break slug unless Link.where(slug: self.slug).exists?
      end
    end
  end
  end