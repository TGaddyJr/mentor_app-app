class Document < ApplicationRecord
  # belongs_to :mentor
  # belongs_to :mentee

  def print
  Prawn::Document.generate("hello.pdf") do
    text "Hello World!"
  end
  end
end
