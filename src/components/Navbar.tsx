"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { loginUser, logoutUser } from "@/redux/store/slices/user/userSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector((state) => state.userSlice.value);

  const handleClick = () => {
    if (loggedUser) dispatch(logoutUser());
  };

  useEffect(() => {
    if (!loggedUser) dispatch(loginUser());
  }, [loggedUser]);

  return (
    <nav>
      <ul className="flex space-x-4 p-4">
        <li>
          <Button variant="link">
            <Link href="/home">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/profile">Profile</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/admin-view">Admin</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/create-project">Create Project</Link>
          </Button>
        </li>
        {!loggedUser ? (
          <>
            <li>
              <Button asChild>
                <Link href="/auth/login">Log In</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </li>
          </>
        ) : null}
        {loggedUser ? (
          <>
            <li>{`${loggedUser?.firstName} ${loggedUser?.lastName}`}</li>
            <li>
              <Button asChild>
                <Link href="/auth/login" onClick={handleClick}>
                  Log out
                </Link>
              </Button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
