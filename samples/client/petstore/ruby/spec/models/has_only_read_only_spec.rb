=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.2.2-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::HasOnlyReadOnly
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'HasOnlyReadOnly' do
  before do
    # run before each test
    @instance = Petstore::HasOnlyReadOnly.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of HasOnlyReadOnly' do
    it 'should create an instance of HasOnlyReadOnly' do
      expect(@instance).to be_instance_of(Petstore::HasOnlyReadOnly)
    end
  end
  describe 'test attribute "bar"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "foo"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
