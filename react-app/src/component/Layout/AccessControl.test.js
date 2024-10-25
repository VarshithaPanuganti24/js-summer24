import { render, screen } from "@testing-library/react";
import AccessControl, { checkAccess } from "./AccessControl";
import { expect, test } from "@jest/globals";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Unauthorized from "../../pages/Unauthorised";

describe("checkAccess function works properly", () => {
    it("should allow access if requiredRoles is not provided", () => {
        // arrange
        const hasAccess = checkAccess("user");
        // assert
        expect(hasAccess).toBe(true);
    });

    it("should allow access if role is in requiredRoles", () => {
        const role = "admin";
        const requiredRoles = ["admin", "super-admin"];
        const hasAccess = checkAccess(role, requiredRoles);
        expect(hasAccess).toBe(true);
    });

    it("should not allow access if role is not provided, but requiredRole is present", () => {
        const role = undefined;
        const requiredRoles = ["admin", "super-admin"];
        const hasAccess = checkAccess(role, requiredRoles);
        expect(hasAccess).toBe(false);
    });

    // 
    it("role & requireRoles is given but role is not present in requireRoles", () => {

        const role = "user";
        const requiredRoles = ["admin", "super-admin"];
        const hasAccess = checkAccess(role, requiredRoles);
        expect(hasAccess).toBe(false);
    });


    // additional case of no role and no requireRoles
    it("should allow if no arguments are passed to checkAccess ", () => {

        const hasAccess = checkAccess();
        expect(hasAccess).toBe(true);
    });

});



describe("AccessControl component", () => {
    it("should render when user has acess and  children is not a page", () => {
        //arrange
        render(
            <AccessControl role="user" requiredRoles={["user", "admin"]} isPage={false} >
                <h1>Hello World</h1>
            </AccessControl>
        );
        //act

        //assert
        const h1Element = screen.getByRole("heading");
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent("Hello World");

    });
    //hw
    it("should render when user has access and children is a page", () => {
        render(
            <AccessControl role="user" requiredRole={["user", "admin"]} isPage={true} >
                <input placeholder="Hello" />
            </AccessControl>
        );
        //act

        //assert
        // const h1Element = screen.getByRole("heading");
        // expect(h1Element).toBeInTheDocument();
        // expect(h1Element).toHaveTextContent("Hello World");

        const inputNode = screen.getByPlaceholderText("Hello");
        expect(inputNode).toBeInTheDocument();
    });

    it("should navigate to unauthorized page when children is a page and user doent have access", () => {
        const testPage = (
            <AccessControl role="user" requiredRoles={["super-admin", "admin"]} isPage={true} >
                <div>Mock page </div>
            </AccessControl>
        );

        render(
            <MemoryRouter initialEntries={["/test"]}>  
                <Routes>
                    <Route path="test" element={testPage} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                </Routes>
            </MemoryRouter>
        );
        //act

        //assert
        const mockPage = screen.queryByText("Mock Page");
        expect(mockPage).not.toBeInTheDocument();

        //assert
        const unauthorized = screen.queryByTestId("unauthorized-page");
        expect(unauthorized).toBeInTheDocument();
    });

    it("should render null if user doent have access and children is not a page", () => {
        render(
            <AccessControl role="guest" requiredRoles={["user", "admin"]} isPage={false} >
                <button>Submit</button>
            </AccessControl>
        )
        const buttonElement = screen.queryByText("button");
        expect(buttonElement).not.toBeInTheDocument();
    });


});