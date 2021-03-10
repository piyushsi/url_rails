class LinksController < ApplicationController

def index
    links = Link.order("pinned DESC, updated_at DESC")
    render status: :ok, json: { links: links }
  end

def createLink
    @link  = Link.find_by(url: url_params)
    if @link
        render status: :ok, json: { slug: @link.slug, success: true }
        else
  
            link = Link.new({url:url_params})
            if link.save
              render status: :ok, json: { slug: link.slug, success: true }
            else
              render status: :unprocessable_entity,
                     json: { errors: link.errors.full_messages.to_sentence }
            end
        end
  end

    def redirectLink
        puts 'hi'
        @link = Link.find_by(slug: params[:slug])
        if @link
            @link.increment!(:clicked)
        redirect_to @link.url
        else 
        render status: :ok, json: { meessage: "link not available", success: false}

        end
    end

    def url_params
        params.required(:url)
    end

    end