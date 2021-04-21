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
				<form className={classes.root} autoComplete="on">
					<FormControl error={null}>
						<InputLabel htmlFor="component-email">Email</InputLabel>
						<Input
							id="component-email"
							name="email"
							value={""}
							onChange={null}
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
							value={""}
							onChange={null}
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
							value={""}
							onChange={null}
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
							value={""}
							onChange={null}
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
							value={""}
							onChange={null}
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
