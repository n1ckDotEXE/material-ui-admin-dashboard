import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	Button,
	CircularProgress,
	Snackbar,
	Grid,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: 350,
		},
	},
}));

function Signup() {
	const classes = useStyles();

	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");

	function handleOnSubmit(e) {
		e.preventDefault();

		console.log(email);
		console.log(userName);
		console.log(firstName);
		console.log(lastName);
		console.log(password);
	}

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: "30vh" }}
		>
			<Grid item xs={12}>
				<form
					className={classes.root}
					autoComplete="on"
					onSubmit={handleOnSubmit}
				>
					<FormControl error={null}>
						<InputLabel htmlFor="component-email">Email</InputLabel>
						<Input
							id="component-email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<FormHelperText id="component-error-text">
							{" "}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={null}>
						<InputLabel htmlFor="component-username">
							Username
						</InputLabel>
						<Input
							id="component-username"
							name="username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<FormHelperText id="component-error-text">
							{" "}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={null}>
						<InputLabel htmlFor="component-firstname">
							First Name
						</InputLabel>
						<Input
							id="component-firstname"
							name="firstname"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<FormHelperText id="component-error-text">
							{" "}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={null}>
						<InputLabel htmlFor="component-lastname">
							Last Name
						</InputLabel>
						<Input
							id="component-lastname"
							name="lastname"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<FormHelperText id="component-error-text">
							{" "}
						</FormHelperText>
					</FormControl>
					<br />
					<FormControl error={null}>
						<InputLabel htmlFor="component-password">
							Password
						</InputLabel>
						<Input
							type="password"
							id="component-password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormHelperText id="component-error-text">
							{" "}
						</FormHelperText>
					</FormControl>
					<br />
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
export default Signup;
