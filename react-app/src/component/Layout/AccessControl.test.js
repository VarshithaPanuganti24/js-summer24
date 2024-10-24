import { render ,screen } from "@testing-library/react";
import AccessControl, { checkAccess } from "./AccessControl";
 

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
        const role = "admin";
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess(requiredRoles);
		expect(!hasAccess).toBe(true);
    });

	// 
    it("role & requireRoles is given but role is not present in requireRoles", ()=>{

        const role = "user";
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess( role,requiredRoles);
		expect(!hasAccess).toBe(true);
    });
    

	// 
    if("additional case of no role and no requireRoles",() => {
        const role = "user";
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess();
		expect(!hasAccess).toBe(true);
    });

});



describe("AccessControl component", () => {
    it("should render non-page children component with proper role", () => {
        //arrange
        render(
            <AccessControl role="user" requiredRole={["user","admin"]} isPage={false} >
                <h1>Hello World</h1>
            </AccessControl>
        );
        //act

        //assert
        const h1Element = screen.getByRole("heading");
        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveTextContent("Hello World");

    });

    
});