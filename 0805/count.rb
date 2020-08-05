# require "byebug"
class Dog
  @count = 0
  def self.new
    @count += 1
    # puts self.ancestors
    super
  end
  def self.count
    @count
  end
  # def count
  #   @count.nil? ? "is nil" : @count
  # end
end

# byebug
bingo1 = Dog.new
bingo2 = Dog.new
bingo3 = Dog.new
bingo4 = Dog.new

puts Dog.count

# puts bingo4.count