import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
global.TextDecoder = TextDecoder;