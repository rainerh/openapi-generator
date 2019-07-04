/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenApiPetstore);
  }
}(this, function(expect, OpenApiPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenApiPetstore.NullableClass();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NullableClass', function() {
    it('should create an instance of NullableClass', function() {
      // uncomment below and update the code to test NullableClass
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be.a(OpenApiPetstore.NullableClass);
    });

    it('should have the property integerProp (base name: "integer_prop")', function() {
      // uncomment below and update the code to test the property integerProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property numberProp (base name: "number_prop")', function() {
      // uncomment below and update the code to test the property numberProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property booleanProp (base name: "boolean_prop")', function() {
      // uncomment below and update the code to test the property booleanProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property stringProp (base name: "string_prop")', function() {
      // uncomment below and update the code to test the property stringProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property dateProp (base name: "date_prop")', function() {
      // uncomment below and update the code to test the property dateProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property datetimeProp (base name: "datetime_prop")', function() {
      // uncomment below and update the code to test the property datetimeProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property arrayNullableProp (base name: "array_nullable_prop")', function() {
      // uncomment below and update the code to test the property arrayNullableProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property arrayAndItemsNullableProp (base name: "array_and_items_nullable_prop")', function() {
      // uncomment below and update the code to test the property arrayAndItemsNullableProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property arrayItemsNullable (base name: "array_items_nullable")', function() {
      // uncomment below and update the code to test the property arrayItemsNullable
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property objectNullableProp (base name: "object_nullable_prop")', function() {
      // uncomment below and update the code to test the property objectNullableProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property objectAndItemsNullableProp (base name: "object_and_items_nullable_prop")', function() {
      // uncomment below and update the code to test the property objectAndItemsNullableProp
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

    it('should have the property objectItemsNullable (base name: "object_items_nullable")', function() {
      // uncomment below and update the code to test the property objectItemsNullable
      //var instane = new OpenApiPetstore.NullableClass();
      //expect(instance).to.be();
    });

  });

}));
