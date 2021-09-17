import styled from "@emotion/styled";
import { position } from "styled-system";
import { Box } from "rebass";

/**
 * The position utility includes style props for position, zIndex, top, right, bottom, and left.
 */
export const Position = styled(Box)(position);
export const Relative = styled(Position)({ position: "relative" });
export const Absolute = styled(Position)({ position: "absolute" });
export const Fixed = styled(Position)({ position: "fixed" });
export const Sticky = styled(Position)({ position: "sticky" });
