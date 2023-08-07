import { render, screen } from "@testing-library/react";
import { SearchInput } from "./index";
import userEvent from "@testing-library/user-event";

describe("<SearchInput />", () => {
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(
      <SearchInput handleChange={fn} searchValue={""} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={"testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });
});
