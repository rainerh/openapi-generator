(*
 * This file has been generated by the OCamlClientCodegen generator for openapi-generator.
 *
 * Generated by: https://openapi-generator.tech
 *
 * Schema Model_200_response.t : Model for testing model name starting with number
 *)

type t = {
    name: int32 option [@default None];
    _class: string option [@default None];
} [@@deriving yojson { strict = false }, show ];;

(** Model for testing model name starting with number *)
let create () : t = {
    name = None;
    _class = None;
}

