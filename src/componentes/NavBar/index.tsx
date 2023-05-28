import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";
import estilos from "./NavBar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import "tw-elements";
import gitSmall from "../../images/githubSmall.png";
import linkedinSmall from "../../images/linkedinSmall.png";
import emailSmall from "../../images/emailSmall.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className={estilos.navbar}>
      <div>
        <h1 className={estilos.destaqueTitulo}>
          <a className={estilos.destaqueTitulo__1}>ANTONIO</a>
          <a className={estilos.destaqueTitulo__2}>VIEIRA</a>
        </h1>
      </div>
      {/* mobile */}
      <div className={estilos.mobile}>
        <Stack>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={isOpen ? "composition-menu" : undefined}
            aria-expanded={isOpen ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              width: "50px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            <GiHamburgerMenu className={estilos.mobile__icon} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Sobre</MenuItem>
                      <MenuItem onClick={handleClose}>Skills</MenuItem>
                      <MenuItem onClick={handleClose}>Projetos</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Stack>
        <ol className={estilos.mobile__sociais}>
          <Link to={"teste"} className={estilos.mobile__links}>
            <img
              src={linkedinSmall}
              className={estilos.mobile__links__icons}
              alt={linkedinSmall}
            />{" "}
            Linkedin
          </Link>
          <Link to={"teste"} className={estilos.mobile__links}>
            <img
              src={gitSmall}
              className={estilos.mobile__links__icons}
              alt={gitSmall}
            />
            Github
          </Link>
          <Link to={"teste"} className={estilos.mobile__links}>
            <img
              src={emailSmall}
              className={estilos.mobile__links__icons}
              alt={emailSmall}
            />
            Contato
          </Link>
        </ol>
      </div>
      {/* desktop */}
      <div className={estilos.conteinerDesktop}>
        <div>
          <h1 className={estilos.conteinerDesktop__destaqueTitulo}>
            <a className={estilos.conteinerDesktop__destaqueTitulo__1}>
              ANTONIO
            </a>
            <a className={estilos.conteinerDesktop__destaqueTitulo__2}>
              VIEIRA
            </a>
          </h1>
        </div>
        <ol className={estilos.conteinerDesktop__opcoes}>
          <li className={estilos.conteinerDesktop__opcoes__links}>Sobre</li>
          <li className={estilos.conteinerDesktop__opcoes__links}>Skills</li>
          <li className={estilos.conteinerDesktop__opcoes__links}>Projetos</li>
        </ol>
        <ol className={estilos.conteinerDesktop__sociais}>
          <Link to={"teste"} className={estilos.mobile__links}>
            <img
              src={linkedinSmall}
              className={estilos.mobile__links__icons}
              alt={linkedinSmall}
            />{" "}
            Linkedin
          </Link>
          <Link to={"teste"} className={estilos.mobile__links}>
            <img
              src={gitSmall}
              className={estilos.mobile__links__icons}
              alt={gitSmall}
            />
            Github
          </Link>
          <Link to={"teste"} className={estilos.mobile__linksEmail}>
            <img
              src={emailSmall}
              className={estilos.mobile__links__icons}
              alt={emailSmall}
            />
            Contato
          </Link>
        </ol>
      </div>
    </div>
  );
}
