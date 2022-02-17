import React from "react";
import ControlledForm from "../SampleSetState/SampleState";
import { shallow } from "enzyme";

let wrapper = shallow(<ControlledForm/>);
describe('Form', ()=>{    
    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      })
})

describe("handleChange", () => {
    test("should call setState on title", () => {
      const mockEvent = {
        target: {
          name: "title",
          value: "test"
        }
      };
      const expectedEvent = {title: "test"};
      wrapper.instance().handleChange(mockEvent);
      
      expect(wrapper.state()).toEqual(expectedEvent);
    });
  });