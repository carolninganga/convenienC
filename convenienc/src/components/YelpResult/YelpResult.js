import React from "react";
import API from "../../utils/YelpAPI";

let businessSearch = [];
class Search extends React.Component {
  state = {
    name: "",
    city: "",
    zip_code: "",
  };
  // run this when page is loaded.
  componentDidMount() {
    // get random list of employees to populate the page.
    API.get().then((response) => {
      console.log(response);
    });
  }
}
// let employees = [];
// get the information we want, in the format we want it,
//   and push it to the employees array for each employee.
//         response.data.results.forEach((employee) => {
//           const phone =
//             employee.phone.slice(0, 5) + " " + employee.phone.slice(6, 14);
//           let date = employee.dob.date;
//           const month = date.slice(5, 7).replace(/^0+/, "");
//           const day = date.slice(8, 10).replace(/^0+/, "");
//           const year = date.slice(0, 4);
//           date = month + "/" + day + "/" + year;
//           let emp = {
//             pic: employee.picture.thumbnail,
//             name: employee.name.last + ", " + employee.name.first,
//             phone: phone,
//             email: employee.email,
//             dob: date,
//           };
//           employees.push(emp);
//         });
//         // put the list of employees found on the page
//         this.setState({
//           employees: employees,
//         });
//         // save list in a global, so they don't get lost when a
//         //   filter is done.
//         allEmployees = employees;
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     // This runs when the v or ^ is clicked to sort the employees
//     document.addEventListener("click", this.handleClickOutside, true);
//   }
//   handleClickOutside = (event) => {
//     let employees = this.state.employees;
//     let src;
//     let alt;
//     let id;
//     if (event.target.id === "down") {
//       // if a down arrow was clicked, sort in alphabetical order
//       //   and set arrow image to the up arrow
//       employees = employees.sort((a, b) => (a.name > b.name ? 1 : -1));
//       src = "../uparrow.png";
//       alt = "^";
//       id = "up";
//     } else if (event.target.id === "up") {
//       // if an up arrow was clicked, sort in reverse alphabetical order
//       //   and set arrow image to the down arrow
//       employees = employees.sort((a, b) => (a.name < b.name ? 1 : -1));
//       src = "../downarrow.png";
//       alt = "v";
//       id = "down";
//     } else {
//       // if something else was clicked, return.
//       //   nothing should happen
//       return;
//     }
//     this.setState({
//       employees: employees,
//       alt: alt,
//       src: src,
//       id: id,
//     });
//   };
//   // Change the state when the search input box changes
//   handleSearchChg = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   // Filter matching employees when submit is clicked
//   // Returns all the employees if the search box is empty.
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // filter on containing the search input
//     const employees = allEmployees.filter((emp) =>
//       emp.name.includes(this.state.search)
//     );
//     // change the page to the employees that match
//     this.setState({
//       employees: employees,
//     });
//   };
//   // two main components to the page:
//   //   The searchbar (including input field to search)
//   //    & the resulting table of employees (including up or down arrow to sort by name)
//   render() {
//     return (
//       <div>
//         <SearchBar
//           search={this.state.search}
//           handleSearchChg={this.handleSearchChg}
//           handleSubmit={this.handleSubmit}
//         />
//         <Table
//           employees={this.state.employees}
//           src={this.state.src}
//           alt={this.state.alt}
//           id={this.state.id}
//         />
//       </div>

export default businessSearch;
