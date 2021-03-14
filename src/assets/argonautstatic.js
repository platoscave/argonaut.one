module.exports = [
  {
    "_id": "gzthjuyjca4s",
    "docType": "class",
    "title": "Process Universe",
    "description": "<p>The root of all classes and objects</p>",
    "properties": {
      "_id": {
        "description": "<p>Base32 identifier.</p>",
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "title": "_id",
        "type": "string",
        "readOnly": true
      },
      "classId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "subclasses",
              "value": "gzthjuyjca4s"
            }
          ],
          "sortBy": "title"
        },
        "title": "Class",
        "type": "string",
        "readOnly": true
      },
      "description": {
        "placholder": "Add a description",
        "maxLength": 10000,
        "contentMediaType": "text/html",
        "minLength": 0,
        "title": "Description",
        "type": "string",
        "readOnly": true
      },
      "docType": {
        "enum": [
          "object"
        ],
        "title": "Doc Type",
        "type": "string"
      },
      "icon": {
        "maxLength": 2000,
        "media": {
          "binaryEncoding": "base64",
          "type": "image/png"
        },
        "minLength": 0,
        "title": "Icon",
        "type": "string",
        "readOnly": true
      },
      "name": {
        "placeholder": "Provide a name",
        "maxLength": 1000,
        "minLength": 0,
        "title": "Name",
        "type": "string",
        "readOnly": true
      }
    },
    "required": [
      "_id",
      "docType",
      "classId"
    ],
    "type": "object",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNjkzMDQyLC0yNjYuMDUwOTkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDBBMzAwIgogICAgICAgZD0ibSAxMy4xNjkzMDQsMjcyLjA0MjA2IDExLDUuNDE4NDEgdiA1LjQxODM5IEggMi4xNjkzMDQyIGwgMTBlLTgsLTUuNDE4MzkgeiIvPgogIDwvZz4KPC9zdmc+"
  },
  {
    "_id": "i1gjptcb2skq",
    "docType": "class",
    "title": "Agreements",
    "description": "<p>Contracts between accounts about resources</p>",
    "parentId": "gzthjuyjca4s",
    "properties": {
      "startDate": {
        "title": "Request Date",
        "type": "date",
        "readOnly": true
      },
      "expirationDate": {
        "title": "Expiration Date",
        "type": "date",
        "readOnly": true
      },
      "amount": {
        "title": "Amount",
        "type": "number",
        "readOnly": true
      },
      "currency": {
        "title": "Currency",
        "type": "string",
        "readOnly": true
      },
      "buyerId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "ikjyhlqewxs3"
            }
          ],
          "sortBy": "name"
        },
        "title": "Buyer",
        "type": "string",
        "readOnly": true
      },
      "sellerId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "ikjyhlqewxs3"
            }
          ],
          "sortBy": "name"
        },
        "title": "Seller",
        "type": "string",
        "readOnly": true
      },
      "assetId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "3ihg3mjdbqzv"
            }
          ],
          "sortBy": "name"
        },
        "title": "Asset",
        "type": "string",
        "readOnly": true
      },
      "agreementProcessId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dwl1kwhalwj4"
            }
          ],
          "sortBy": "name"
        },
        "title": "Agreememt Process",
        "type": "string",
        "readOnly": true
      },
      "sellerProcessId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dwl1kwhalwj4"
            }
          ],
          "sortBy": "name"
        },
        "title": "Seller Process",
        "type": "string",
        "readOnly": true
      },
      "sellerEpicId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dwl1kwhalwj4"
            }
          ],
          "sortBy": "name"
        },
        "title": "Seller Epic",
        "type": "string",
        "readOnly": true
      },
      "processStack": {
        "items": {
          "properties": {
            "processId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dwl1kwhalwj4"
                  }
                ],
                "sortBy": "name"
              },
              "title": "Process",
              "type": "string",
              "readOnly": true
            },
            "stateId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dlpwvptczyeb"
                  }
                ],
                "sortBy": "name"
              },
              "title": "State",
              "type": "string",
              "readOnly": true
            }
          },
          "required": [
            "action",
            "stateId"
          ],
          "type": "object"
        },
        "title": "Process Stack",
        "type": "array",
        "readOnly": true
      },
      "agreementHistoryIds": {
        "items": {
          "properties": {
            "agreementHistoryId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "re1ihrfyl3zf"
                  }
                ],
                "sortBy": "name"
              },
              "title": "State History",
              "type": "string",
              "readOnly": true
            }
          },
          "type": "object"
        },
        "title": "Agreement History",
        "type": "array",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "ikjyhlqewxs3",
    "docType": "class",
    "title": "Accounts",
    "parentId": "gzthjuyjca4s",
    "ownerId": "eoscommonsio",
    "properties": {
      "pageId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "pejdgrwd5qso"
            }
          ],
          "sortBy": "name"
        },
        "title": "Page",
        "type": "string",
        "readOnly": true
      },
      "subParagraphIds": {
        "title": "First Paragraph",
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "siutzqsj5dgc"
            }
          ]
        },
        "type": "string",
        "readOnly": true
      },
      "account_name": {
        "maxLength": 12,
        "minLength": 12,
        "title": "Account Name",
        "type": "string",
        "readOnly": true
      },
      "head_block_num": {
        "title": "Head Block Number",
        "type": "number",
        "readOnly": true
      },
      "head_block_time": {
        "format": "date-time",
        "title": "Head Block Time",
        "type": "date",
        "readOnly": true
      },
      "privileged": {
        "title": "Privileged",
        "type": "boolean",
        "readOnly": true
      },
      "last_code_update": {
        "format": "date-time",
        "title": "Last Code Update",
        "type": "date",
        "readOnly": true
      },
      "created": {
        "format": "date-time",
        "title": "Created",
        "type": "date",
        "readOnly": true
      },
      "ram_quota": {
        "title": "Ram Quota",
        "type": "number",
        "readOnly": true
      },
      "net_weight": {
        "title": "Net Weight",
        "type": "number",
        "readOnly": true
      },
      "cpu_weight": {
        "title": "Cpu Weight",
        "type": "number",
        "readOnly": true
      },
      "net_limit": {
        "properties": {
          "used": {
            "title": "Used",
            "type": "number",
            "readOnly": true
          },
          "available": {
            "title": "Available",
            "type": "number",
            "readOnly": true
          },
          "max": {
            "title": "Maximum",
            "type": "number",
            "readOnly": true
          }
        },
        "type": "object"
      },
      "cpu_limit": {
        "properties": {
          "used": {
            "title": "Used",
            "type": "number",
            "readOnly": true
          },
          "available": {
            "title": "Available",
            "type": "number",
            "readOnly": true
          },
          "max": {
            "title": "Maximum",
            "type": "number",
            "readOnly": true
          }
        },
        "type": "object"
      },
      "ram_usage": {
        "title": "Ram Usage",
        "type": "number",
        "readOnly": true
      },
      "permissions": {
        "items": {
          "properties": {
            "perm_name": {
              "maxLength": 12,
              "minLength": 1,
              "title": "Permission Name",
              "type": "string",
              "readOnly": true
            },
            "parent": {
              "maxLength": 12,
              "minLength": 1,
              "title": "Parent Permission",
              "type": "string",
              "readOnly": true
            },
            "required_auth": {
              "properties": {
                "threshold": {
                  "title": "Threshold",
                  "type": "number",
                  "readOnly": true
                },
                "keys": {
                  "items": {
                    "properties": {
                      "_id": {
                        "maxLength": 44,
                        "minLength": 0,
                        "title": "Key",
                        "type": "string",
                        "readOnly": true
                      },
                      "weight": {
                        "title": "Weight",
                        "type": "number",
                        "readOnly": true
                      }
                    },
                    "type": "object"
                  },
                  "title": "Keys",
                  "type": "array"
                },
                "accounts": {
                  "items": {
                    "properties": {
                      "permission": {
                        "properties": {
                          "actor": {
                            "maxLength": 12,
                            "minLength": 0,
                            "title": "Actor",
                            "type": "string",
                            "readOnly": true
                          },
                          "permission": {
                            "maxLength": 12,
                            "minLength": 0,
                            "title": "Permission",
                            "type": "string",
                            "readOnly": true
                          }
                        },
                        "title": "Permission",
                        "type": "object"
                      },
                      "weight": {
                        "title": "Weight",
                        "type": "number",
                        "readOnly": true
                      }
                    },
                    "type": "object"
                  },
                  "title": "Accounts",
                  "type": "array"
                },
                "waits": {
                  "items": {
                    "properties": {
                      "wait_sec": {
                        "title": "Wait Seconds",
                        "type": "string",
                        "readOnly": true
                      },
                      "weight": {
                        "title": "Weight",
                        "type": "number",
                        "readOnly": true
                      }
                    },
                    "type": "object"
                  },
                  "title": "Waits",
                  "type": "array",
                  "readOnly": true
                }
              },
              "title": "Required Authorization",
              "additionalProperties": false,
              "type": "object"
            }
          },
          "type": "object"
        },
        "title": "Permissions",
        "type": "array"
      },
      "total_resources": {
        "properties": {
          "owner": {
            "title": "Owner",
            "type": "string",
            "readOnly": true
          },
          "net_weigh": {
            "title": "Net Weight",
            "type": "string",
            "readOnly": true
          },
          "cpu_weight": {
            "title": "CPU Weight",
            "type": "string",
            "readOnly": true
          },
          "ram_bytes": {
            "title": "Ram Bytes",
            "type": "number",
            "readOnly": true
          }
        },
        "title": "Total Resources",
        "type": "object"
      },
      "self_delegated_bandwidth": {
        "properties": {
          "from": {
            "title": "From",
            "type": "string",
            "readOnly": true
          },
          "to": {
            "title": "To",
            "type": "string",
            "readOnly": true
          },
          "cpu_weight": {
            "title": "CPU Weight",
            "type": "string",
            "readOnly": true
          },
          "cpu_weigh": {
            "title": "CPU Weight",
            "type": "string",
            "readOnly": true
          }
        },
        "title": "Self Delegated Bandwidth",
        "type": "object"
      },
      "refund_request": {
        "title": "Refund Request",
        "type": "string",
        "readOnly": true
      },
      "voter_info": {
        "title": "Voter Info",
        "properties": {
          "owner": {
            "title": "Owner",
            "type": "string",
            "readOnly": true
          },
          "proxy": {
            "title": "Proxy",
            "type": "string",
            "readOnly": true
          },
          "producer": {
            "title": "Producer",
            "type": "Array",
            "readOnly": true
          },
          "staked": {
            "title": "Staked",
            "type": "number",
            "readOnly": true
          },
          "last_vote_weight": {
            "title": "Last Vote Weight",
            "type": "string",
            "readOnly": true
          },
          "proxied_vote_weight": {
            "title": "Proxied Vote Weight",
            "type": "string",
            "readOnly": true
          },
          "is_proxy": {
            "title": "Is Proxy",
            "type": "boolean",
            "readOnly": true
          },
          "flags1": {
            "title": "Flags 1",
            "type": "number",
            "readOnly": true
          },
          "reserved2": {
            "title": "Reserved 2",
            "type": "number",
            "readOnly": true
          },
          "reserved3": {
            "title": "Reserved 3",
            "type": "string",
            "readOnly": true
          }
        },
        "type": "object"
      }
    },
    "query": "get_account_info",
    "type": "object",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHZpZXdCb3g9IjAgMCA3MDAgNzAwIgogICB3aWR0aD0iNzAwIgogICBoZWlnaHQ9IjcwMCI+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS41OTMyMiw5NC45MTUyNTQpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDYxMC41LDM0MS4zIGMgMi42LC0xNC4xIDIuNiwtMjguNSAwLC00Mi42IGwgMjUuOCwtMTQuOSBjIDMsLTEuNyA0LjMsLTUuMiAzLjMsLTguNSAtNi43LC0yMS42IC0xOC4yLC00MS4yIC0zMy4yLC01Ny40IC0yLjMsLTIuNSAtNiwtMy4xIC05LC0xLjQgbCAtMjUuOCwxNC45IGMgLTEwLjksLTkuMyAtMjMuNCwtMTYuNSAtMzYuOSwtMjEuMyB2IC0yOS44IGMgMCwtMy40IC0yLjQsLTYuNCAtNS43LC03LjEgLTIyLjMsLTUgLTQ1LC00LjggLTY2LjIsMCAtMy4zLDAuNyAtNS43LDMuNyAtNS43LDcuMSB2IDI5LjggYyAtMTMuNSw0LjggLTI2LDEyIC0zNi45LDIxLjMgbCAtMjUuOCwtMTQuOSBjIC0yLjksLTEuNyAtNi43LC0xLjEgLTksMS40IC0xNSwxNi4yIC0yNi41LDM1LjggLTMzLjIsNTcuNCAtMSwzLjMgMC40LDYuOCAzLjMsOC41IGwgMjUuOCwxNC45IGMgLTIuNiwxNC4xIC0yLjYsMjguNSAwLDQyLjYgbCAtMjUuOCwxNC45IGMgLTMsMS43IC00LjMsNS4yIC0zLjMsOC41IDYuNywyMS42IDE4LjIsNDEuMSAzMy4yLDU3LjQgMi4zLDIuNSA2LDMuMSA5LDEuNCBsIDI1LjgsLTE0LjkgYyAxMC45LDkuMyAyMy40LDE2LjUgMzYuOSwyMS4zIHYgMjkuOCBjIDAsMy40IDIuNCw2LjQgNS43LDcuMSAyMi4zLDUgNDUsNC44IDY2LjIsMCAzLjMsLTAuNyA1LjcsLTMuNyA1LjcsLTcuMSB2IC0yOS44IGMgMTMuNSwtNC44IDI2LC0xMiAzNi45LC0yMS4zIGwgMjUuOCwxNC45IGMgMi45LDEuNyA2LjcsMS4xIDksLTEuNCAxNSwtMTYuMiAyNi41LC0zNS44IDMzLjIsLTU3LjQgMSwtMy4zIC0wLjQsLTYuOCAtMy4zLC04LjUgeiBNIDQ5NiwzNjguNSBjIC0yNi44LDAgLTQ4LjUsLTIxLjggLTQ4LjUsLTQ4LjUgMCwtMjYuNyAyMS44LC00OC41IDQ4LjUsLTQ4LjUgMjYuNywwIDQ4LjUsMjEuOCA0OC41LDQ4LjUgMCwyNi43IC0yMS43LDQ4LjUgLTQ4LjUsNDguNSB6IE0gOTYsMjI0IGMgMzUuMywwIDY0LC0yOC43IDY0LC02NCAwLC0zNS4zIC0yOC43LC02NCAtNjQsLTY0IC0zNS4zLDAgLTY0LDI4LjcgLTY0LDY0IDAsMzUuMyAyOC43LDY0IDY0LDY0IHogbSAyMjQsMzIgYyAxLjksMCAzLjcsLTAuNSA1LjYsLTAuNiA4LjMsLTIxLjcgMjAuNSwtNDIuMSAzNi4zLC01OS4yIDcuNCwtOCAxNy45LC0xMi42IDI4LjksLTEyLjYgNi45LDAgMTMuNywxLjggMTkuNiw1LjMgbCA3LjksNC42IGMgMC44LC0wLjUgMS42LC0wLjkgMi40LC0xLjQgNywtMTQuNiAxMS4yLC0zMC44IDExLjIsLTQ4IDAsLTYxLjkgLTUwLjEsLTExMiAtMTEyLC0xMTIgQyAyNTgsMzIuMSAyMDgsODIuMSAyMDgsMTQ0IGMgMCw2MS45IDUwLjEsMTEyIDExMiwxMTIgeiBtIDEwNS4yLDE5NC41IGMgLTIuMywtMS4yIC00LjYsLTIuNiAtNi44LC0zLjkgLTguMiw0LjggLTE1LjMsOS44IC0yNy41LDkuOCAtMTAuOSwwIC0yMS40LC00LjYgLTI4LjksLTEyLjYgLTE4LjMsLTE5LjggLTMyLjMsLTQzLjkgLTQwLjIsLTY5LjYgLTEwLjcsLTM0LjUgMjQuOSwtNDkuNyAyNS44LC01MC4zIC0wLjEsLTIuNiAtMC4xLC01LjIgMCwtNy44IGwgLTcuOSwtNC42IGMgLTMuOCwtMi4yIC03LC01IC05LjgsLTguMSAtMy4zLDAuMiAtNi41LDAuNiAtOS44LDAuNiAtMjQuNiwwIC00Ny42LC02IC02OC41LC0xNiBoIC04LjMgQyAxNzkuNiwyODggMTI4LDMzOS42IDEyOCw0MDMuMiBWIDQzMiBjIDAsMjYuNSAyMS41LDQ4IDQ4LDQ4IGggMjU1LjQgYyAtMy43LC02IC02LjIsLTEyLjggLTYuMiwtMjAuMyB6IE0gMTczLjEsMjc0LjYgQyAxNjEuNSwyNjMuMSAxNDUuNiwyNTYgMTI4LDI1NiBIIDY0IEMgMjguNywyNTYgMCwyODQuNyAwLDMyMCB2IDMyIGMgMCwxNy43IDE0LjMsMzIgMzIsMzIgaCA2NS45IGMgNi4zLC00Ny40IDM0LjksLTg3LjMgNzUuMiwtMTA5LjQgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwZmYiLz4KICA8L2c+Cjwvc3ZnPgoK"
  },
  {
    "_id": "re1ihrfyl3zf",
    "docType": "class",
    "title": "Transactions",
    "description": "<p>Contracts between accounts about resources</p>",
    "parentId": "gzthjuyjca4s",
    "properties": {
      "stateDate": {
        "title": "State Date",
        "type": "date",
        "readOnly": true
      },
      "action": {
        "title": "Action",
        "type": "string",
        "readOnly": true
      },
      "stateId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dlpwvptczyeb"
            }
          ],
          "sortBy": "name"
        },
        "title": "State",
        "type": "string",
        "readOnly": true
      },
      "processId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dwl1kwhalwj4"
            }
          ],
          "sortBy": "name"
        },
        "title": "Process",
        "type": "string",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "ync5iiwvtsf3",
    "docType": "class",
    "title": "Resources",
    "description": "<p>Things owned by users/organizations</p>",
    "parentId": "gzthjuyjca4s",
    "properties": {
      "ownerId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "ikjyhlqewxs3"
            }
          ],
          "sortBy": "name"
        },
        "title": "Owner",
        "type": "string",
        "readOnly": true
      }
    },
    "required": [
      "ownerId"
    ],
    "type": "object"
  },
  {
    "_id": "hhg2u2zptnfo",
    "docType": "class",
    "title": "Purchase",
    "description": "<p>Purchase Agreements between owners</p>",
    "parentId": "i1gjptcb2skq",
    "type": "object"
  },
  {
    "_id": "uhir12cjxgzb",
    "docType": "class",
    "title": "Rental",
    "description": "<p>Rental Agreements between owners</p>",
    "parentId": "i1gjptcb2skq",
    "type": "object"
  },
  {
    "_id": "w3mzeetidb5n",
    "docType": "class",
    "title": "Service Request",
    "description": "<p>Service Agreements between owners</p>",
    "parentId": "i1gjptcb2skq",
    "properties": {
      "classification": {
        "enum": [
          "Question",
          "Defect",
          "Enhancement"
        ],
        "title": "Classification",
        "type": "string",
        "readOnly": true
      },
      "sellerEpicId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "dwl1kwhalwj4"
            }
          ],
          "sortBy": "name"
        },
        "title": "Seller Epic",
        "type": "string",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "ynpbcptu1i4q",
    "docType": "class",
    "title": "Membership",
    "description": "<p>Menbership Agreements between user and organizations</p>",
    "parentId": "i1gjptcb2skq",
    "type": "object"
  },
  {
    "_id": "dasprps1lrwf",
    "docType": "class",
    "title": "Organizational Units",
    "description": "<p>Organizational units owned by organizations</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODBDQUY3RkM2OUEzMTFFM0ExRDBGQzcyRDA1NTZFMEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODBDQUY3RkQ2OUEzMTFFM0ExRDBGQzcyRDA1NTZFMEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MENBRjdGQTY5QTMxMUUzQTFEMEZDNzJEMDU1NkUwRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MENBRjdGQjY5QTMxMUUzQTFEMEZDNzJEMDU1NkUwRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj6+XOUAAAGRSURBVHjafFK/T8JAFH7XHtFECg0xwZ3EOLnILOpWaqJ/gLOLf4B/ibuDm4NiKN1EnHFxk4RRogugwcHSu/PelcPSUl7ycnfvu/vej/uIEAIIIaDt4ublfhryE8YFJM00COSo0bg62zudB5EgbufXXfEtg4NAiPeY4xnjiMfv02QWxjn8BABvw1QBsFOK8JUEqioDwF7H6gCwOUyJXWI8aSkC0zTBklFSjAg0AxLkSYSvJBBs+nh52zvSQ1SZxf8QEY/fJ8lfkFaRbuvD7nal+9rrV2P4WHo/k+Bgv6YSCsHBMAzpJnDOpHN5z1AdPT13SGYLG5YFntesQoa57nE31cJDszmSqyobs2ptUEo/XcfZ8nz/IwzDcjQToqqZ7ceqAsaY7dbr8MtC/WmwZlJo+b56FARBue44KdxrtWyq1chDBl/DkcZhs1SaZ8J1GY7v5jMwcxQsKw96qHhe0EcGTnVfOUqhWCgsPNK/swpXBJPJpHPXaNR4TOc4TBlvz/C2xA+X4B2tgwXxLBFNJv4nwABEa91VFnwXcgAAAABJRU5ErkJggg==",
    "parentId": "ikjyhlqewxs3",
    "pageId": "t2grmjaab5fn",
    "properties": {
      "authorizedForStateIds": {
        "items": {
          "properties": {
            "processId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dlpwvptczyeb"
                  }
                ],
                "sortBy": "name"
              },
              "title": "Authorized for State",
              "type": "string",
              "readOnly": true
            }
          },
          "type": "object"
        },
        "title": "Authorized for States",
        "type": "array",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "hdt3hmnsaghk",
    "docType": "class",
    "title": "Users",
    "description": "<p>Users own resourses</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTI0OTU2Mjc1NDE0MTFFMUIxRUJDMTA5NzgzMTIzMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTI0OTU2Mjg1NDE0MTFFMUIxRUJDMTA5NzgzMTIzMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjQ5NTYyNTU0MTQxMUUxQjFFQkMxMDk3ODMxMjMyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MjQ5NTYyNjU0MTQxMUUxQjFFQkMxMDk3ODMxMjMyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuG7TDUAAAHRSURBVHjafFJNaBNREP7e/iUSNiQSLHrReC54yK0ieMq1B68etMSDCEJAFPSQmIM9KC1GjUiDiFfvgrZYC60imEvwJP60FyMSQ1LT/G2y09nNJm6STT4Yvpl5M+/NzxNEhAG27wXJ7CHBrrwQeMF8iXmJ+TlzQpKRP3fnn3DnwDIGspXRqbKuE5V0enOLucl8s29XNnSyzsdzJLhgmkD4FCtNQvw6Gw0T8SRzy0Q42gN6BsahuA27MuIEsgI7jhNDlk3MvkBYUcLA3u95vPp8BR3DhyO+OiLBMkq1KPxzNazlatc49InnDDbTAaLvoAePn5IbK9mHQz2be0RTZ+CUYb9sqzx6C7KqDnUM2MHkBdyFpnSG1cEZy6e7wE5GwJT8f0fec+/0fVqn8xcN/KmexMuPSRhcid/fxuWFVYSO/8CHZ12cTeEM5xS9t2DVTwqOHd3FjQtX0e5GoO6X8WVLw0/SYMqqtePi7BZsl8a1BeALNSAFAwid0NBqyHwkz17j/8YEXt8XUPhB1WcNEag26e3icv325MxcK3mX4m/7leUbyy+WA502U/b3jbGc9spRvLZgS7cvzowLmALJ00tjMgMja+TPEpsSVxhve4BDAQYA4h0NK1GHkjIAAAAASUVORK5CYII=",
    "parentId": "ikjyhlqewxs3",
    "pageId": "z1wmobr423zh",
    "type": "object"
  },
  {
    "_id": "pae2bfbrab5n",
    "docType": "class",
    "title": "Organizations",
    "description": "<p>Organizations owned by users/organizations</p>",
    "parentId": "ikjyhlqewxs3",
    "properties": {
      "description": {
        "title": "What",
        "placeholder": "<p>[What do you do that is different?]</p>",
        "readOnly": true
      },
      "how": {
        "placeholder": "<p>[How do you achive your goal?]</p>",
        "maxLength": 10000,
        "contentMediaType": "text/html",
        "minLength": 0,
        "title": "How",
        "type": "string",
        "readOnly": true
      },
      "why": {
        "placeholder": "<p>[Vision]</p>",
        "maxLength": 10000,
        "contentMediaType": "text/html",
        "minLength": 0,
        "title": "Why",
        "type": "string",
        "readOnly": true
      },
      "exposedToProcessesIds": {
        "items": {
          "properties": {
            "processId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dwl1kwhalwj4"
                  }
                ],
                "sortBy": "name"
              },
              "title": "Exposed to Process",
              "type": "string",
              "readOnly": true
            }
          },
          "type": "object"
        },
        "title": "Exposed to Processes",
        "type": "array",
        "readOnly": true
      }
    },
    "type": "object",
    "pageId": "44yiclbxugop"
  },
  {
    "_id": "5jdnjqxsqmgn",
    "docType": "class",
    "title": "Balance Sheet",
    "description": "<p>Balance sheet owned by users/organizations</p>",
    "parentId": "ync5iiwvtsf3",
    "properties": {
      "value": {
        "title": "Value",
        "type": "number",
        "readOnly": true
      },
      "currency": {
        "enum": [
          "EUR",
          "USD"
        ],
        "title": "Currency",
        "type": "string",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "nrioirgelhpi",
    "docType": "class",
    "title": "Off Balance Sheet",
    "description": "<p>Other things owned by users/organizations</p>",
    "parentId": "ync5iiwvtsf3",
    "type": "object"
  },
  {
    "_id": "be1ub1vtofjo",
    "docType": "class",
    "title": "Non-Profit",
    "description": "<p>Non-profit organizations</p>",
    "parentId": "pae2bfbrab5n",
    "type": "object"
  },
  {
    "_id": "t5punszz4lhv",
    "docType": "class",
    "title": "Goverment",
    "description": "<p>Goverment</p>",
    "parentId": "pae2bfbrab5n",
    "type": "object"
  },
  {
    "_id": "zx5ffzoa5euy",
    "docType": "class",
    "title": "Commercial",
    "description": "<p>Comercial organizations</p>",
    "parentId": "pae2bfbrab5n",
    "type": "object"
  },
  {
    "_id": "3a1qf1ogj1an",
    "docType": "object",
    "description": "<p>Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. Procured shutters mr it feelings. To or three offer house begin taken am at. As dissuade cheerful overcame so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion. An seeing feebly stairs am branch income me unable.</p>",
    "stateDate": "2019-07-10",
    "stateId": "pvk5ngmorf4z",
    "classId": "re1ihrfyl3zf"
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "uqefmsegqvhs",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:29.115Z",
    "updaterId": "platoscave11",
    "_id": "4caczktyxzm5",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "gczvalloctae",
    "stateDate": "2019-10-26T11:36:03.810Z",
    "updaterId": "platoscave11",
    "_id": "52efxse2sjxf",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3edgchx5lgu3",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:03.867Z",
    "updaterId": "platoscave11",
    "_id": "altduhtklcwv",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "bavb2g1inh2t",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:23.716Z",
    "updaterId": "platoscave11",
    "_id": "dp3ooabnibu5",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3edgchx5lgu3",
    "action": "happy",
    "stateDate": "2019-10-27T07:58:10.545Z",
    "updaterId": "demouser1111",
    "_id": "hhryhzffmg3d",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3edgchx5lgu3",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:23.682Z",
    "updaterId": "platoscave11",
    "_id": "juoinvyykf4t",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "gczvalloctae",
    "stateDate": "2019-10-27T07:58:01.770Z",
    "updaterId": "demouser1111",
    "_id": "lxxpxne2ffcr",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3r5kgovlor1o",
    "stateDate": "2019-10-26T11:36:03.851Z",
    "updaterId": "platoscave11",
    "_id": "mh1u3yc2fwzj",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "h3q1vchxahoh",
    "stateId": "gczvalloctae",
    "stateDate": "2019-10-27T07:58:10.724Z",
    "updaterId": "demouser1111",
    "_id": "nis2slj2ocoi",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "h3q1vchxahoh",
    "stateId": "pvk5ngmorf4z",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:17.403Z",
    "updaterId": "platoscave11",
    "_id": "omqequgsfzkh",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "h3q1vchxahoh",
    "stateId": "yefagaab4ua2",
    "stateDate": "2019-10-27T07:58:10.760Z",
    "updaterId": "demouser1111",
    "_id": "p2faabdypbnv",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "h3q1vchxahoh",
    "stateId": "yefagaab4ua2",
    "stateDate": "2019-10-26T11:36:03.905Z",
    "updaterId": "platoscave11",
    "_id": "tovhfrfjfhrj",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3hxkire2nn4v",
    "action": "happy",
    "stateDate": "2019-10-26T11:36:29.153Z",
    "updaterId": "platoscave11",
    "_id": "trmnlwypvlnq",
    "isDirty": true
  },
  {
    "_id": "vwpi4s1zvyit",
    "docType": "object",
    "description": "<p>Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.</p>",
    "stateDate": "2019-07-07",
    "stateId": "pvk5ngmorf4z",
    "classId": "re1ihrfyl3zf"
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "h3q1vchxahoh",
    "stateId": "gczvalloctae",
    "stateDate": "2019-10-26T11:36:03.888Z",
    "updaterId": "platoscave11",
    "_id": "xkuhdep5u3vs",
    "isDirty": true
  },
  {
    "docType": "object",
    "classId": "re1ihrfyl3zf",
    "processId": "ynaxakdc423e",
    "stateId": "3r5kgovlor1o",
    "stateDate": "2019-10-27T07:58:01.818Z",
    "updaterId": "demouser1111",
    "_id": "yrxotdaks2nk",
    "isDirty": true
  },
  {
    "_id": "3ihg3mjdbqzv",
    "docType": "class",
    "title": "Assets",
    "description": "<p>Assets owned by users/organizations</p>",
    "parentId": "5jdnjqxsqmgn",
    "type": "object"
  },
  {
    "_id": "sgefdtu1bttq",
    "docType": "class",
    "title": "Liabilities and Stockholder's Equity",
    "description": "<p>Liabilities owned by users/organizations</p>",
    "parentId": "5jdnjqxsqmgn",
    "type": "object"
  },
  {
    "_id": "dlpwvptczyeb",
    "docType": "class",
    "title": "States",
    "description": "<p>States</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ1JREFUeNpi/P//PwMlgImBQjDwBrAETGAkSiEopP79Y5j19z9DKjMjAyMT0GqwTlAgEotdOxn+33yy5L9zO4j7n8GvH2iITy/D+t9/GQKApjP8x2M90GYGG1UGBkVRBgYjhdkMxctTGfZU/Gdk+QPU3BWTyvDrzx8GfDH67z/ItcwMl5/OYTjzNJWhNbyNwbOb8T8LyB/X3s8GGsCA1wCQ3F+gKxnYIUH/9c87sDijSy3DOlZehsB/BDSDvGhtDPSCPAOD8P9UhokbZjPsqWQwAckDhRiMicHuHQz/N9wK+e/WDg4uY3Ag+vcTH+cfnzFM4xZnyNxawmAC1HyWkYx0Iwl1DRwwDv3MBBBgAJlZhvyadk3fAAAAAElFTkSuQmCC",
    "parentId": "nrioirgelhpi",
    "pageId": "2vnljdsieyjw",
    "properties": {
      "nextStateIds": {
        "items": {
          "properties": {
            "action": {
              "maxLength": 100,
              "title": "Action",
              "type": "string",
              "readOnly": true
            },
            "stateId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dlpwvptczyeb"
                  }
                ],
                "sortBy": "name"
              },
              "title": "State",
              "type": "string",
              "readOnly": true
            }
          },
          "required": [
            "action"
          ],
          "type": "object"
        },
        "title": "Next States",
        "type": "array",
        "readOnly": true
      },
      "substateId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "1jrqyjoabx1a"
            }
          ],
          "sortBy": "name"
        },
        "title": "Substate",
        "type": "string",
        "readOnly": true
      },
      "execute": {
        "items": {
          "type": "string"
        },
        "title": "Execute",
        "type": "array",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "dwl1kwhalwj4",
    "docType": "class",
    "title": "Processes",
    "description": "<p>Processes</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiMwMGZmMDAiIGlkPSJzdmdfMSIgZD0ibTE1LjM3NSw3bC01LjM3NSwtNC40NmMtMC4zMDUsLTAuMjUzIC0wLjUzOSwtMC41NCAtMSwtMC41NGMtMC42MjUsMCAtMSwwLjUxNiAtMSwxbDAsM2wtNywwYy0wLjU1LDAgLTEsMC40NSAtMSwxbDAsMmMwLDAuNTUgMC40NSwxIDEsMWw3LDBsMCwzYzAsMC40ODQgMC4zNzUsMSAxLDFjMC40NjEsMCAwLjY5NSwtMC4yODcgMSwtMC41NGw1LjM3NSwtNC40NmMwLjM4MywtMC4zMTIgMC42MjUsLTAuNTU1IDAuNjI1LC0xcy0wLjI0MiwtMC42ODcgLTAuNjI1LC0xeiIvPgogPC9nPgo8L3N2Zz4=",
    "parentId": "nrioirgelhpi",
    "pageId": "z2xnjsqcs5bj",
    "properties": {
      "returnActions": {
        "title": "Return Actions",
        "items": {
          "type": "string"
        },
        "type": "array",
        "readOnly": true
      },
      "agreementClassId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "subclasses",
              "value": "i1gjptcb2skq"
            }
          ],
          "sortBy": "name"
        },
        "title": "Substate",
        "type": "string",
        "readOnly": true
      },
      "substateId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "1jrqyjoabx1a"
            }
          ],
          "sortBy": "name"
        },
        "title": "Substate",
        "type": "string",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "pejdgrwd5qso",
    "docType": "class",
    "title": "Pages",
    "description": "<p>Describes the Tab-Widget-View Reference structure</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUEzQUFDMTYxMDhEMTFFMzkwNDQ4NUQ1MkZFMjQ0OTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUEzQUFDMTcxMDhEMTFFMzkwNDQ4NUQ1MkZFMjQ0OTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTNBQUMxNDEwOEQxMUUzOTA0NDg1RDUyRkUyNDQ5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTNBQUMxNTEwOEQxMUUzOTA0NDg1RDUyRkUyNDQ5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpD5Z40AAAHySURBVHjajJNRa1MxFMf/yc2USYsDVzbnupeCDz6OTmtvsW4vgjKtoqBFwYJ+i734vA8xFN/6YLu2K+vGNhl70TF9EfsFXEGQglbr1ptkSW7TVrStBy7JPSfnf345ScjynZU9IURcSgw0SgBC6R6lJNHrZ9wT8Rs3ZyGVAiGkv4BDsL524OpCveuY94uj1fRQqXyAhI7+naxdOok6VBUiklL6RpHcMwKzS1OYW4iilH+HxQcxaPF+JL6IIblrSZjX5CbYUiT8N8fG5se+JFbEUQ1RGFIR5Zj08xF9cQGXb82htPoet+9fsdwDmkpQWTtIMesQR8KMZ84zHP9sYXe3CkpJuwddIU0nhMS15CWMTo6AdSMEzaMmLj4J4epiDJHvEVNFWgHSUQAXAhNnQ/hW+QpmG6Y6a4Li2CdZzeaQTM7j3Pg4qp8/wdwTv3PmyCfcELiipo1GY6dYLMJxnD9QHz56jLc72zg1chqHX2pw4y5cN2HG2mHNh1FbYel0+pmajxUKhX0j0iZ6/eolnmYyptp0OIxsNtsRn56Z6Z5KuVw2k3q9vhUMBuc9z0MqlQLnXDVLdLbXeze0qC6Wz+e7TVQkzzWJcu7rf71AfwPfhxa2BNYUyXYgELhuqw9MJuTHv25KRJPg/4wTOewdD7ETAQYAteK9N9YYuvoAAAAASUVORK5CYII=",
    "parentId": "nrioirgelhpi",
    "pageId": "icfdprzi442m",
    "properties": {
      "accordionOrTab": {
        "default": "Tabs",
        "enum": [
          "Accordions",
          "Tabs"
        ],
        "title": "Accordian or Tab",
        "type": "string",
        "readOnly": true
      },
      "divider": {
        "default": "None",
        "enum": [
          "None",
          "Vertical",
          "Horizontal"
        ],
        "title": "Divider",
        "type": "string",
        "readOnly": true
      },
      "tabs": {
        "description": "",
        "items": {
          "additionalProperties": false,
          "properties": {
            "description": {
              "placholder": "Add a description",
              "maxLength": 10000,
              "contentMediaType": "text/html",
              "title": "Description",
              "type": "string",
              "readOnly": true
            },
            "name": {
              "placeholder": "Provide a name",
              "maxLength": 1000,
              "title": "Tab Name",
              "type": "string",
              "readOnly": true
            },
            "pageId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "pejdgrwd5qso"
                  }
                ],
                "sortBy": "name"
              },
              "title": "Page",
              "type": "string",
              "readOnly": true
            },
            "widgets": {
              "items": {
                "additionalProperties": false,
                "properties": {
                  "description": {
                    "placholder": "Add a description",
                    "maxLength": 10000,
                    "contentMediaType": "text/html",
                    "title": "Description",
                    "type": "string",
                    "readOnly": true
                  },
                  "displayType": {
                    "default": "Form",
                    "enum": [
                      "Balance Sheet",
                      "Class Model",
                      "Document",
                      "Form",
                      "HTML Page",
                      "Navigation Menu",
                      "Page Editor",
                      "Process Model",
                      "Table",
                      "Tree"
                    ],
                    "title": "Display Type",
                    "type": "string",
                    "readOnly": true
                  },
                  "name": {
                    "placeholder": "Provide a name",
                    "maxLength": 1000,
                    "title": "Name",
                    "type": "string",
                    "readOnly": true
                  },
                  "pageId": {
                    "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
                    "query": {
                      "where": [
                        {
                          "docProp": "classId",
                          "operator": "instances",
                          "value": "pejdgrwd5qso"
                        }
                      ],
                      "sortBy": "name"
                    },
                    "title": "Page",
                    "type": "string",
                    "readOnly": true
                  },
                  "viewId": {
                    "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
                    "query": {
                      "where": [
                        {
                          "docProp": "classId",
                          "operator": "instances",
                          "value": "pylvseoljret"
                        }
                      ],
                      "sortBy": "name"
                    },
                    "title": "View",
                    "type": "string",
                    "readOnly": true
                  }
                },
                "type": "object"
              },
              "title": "Widgets",
              "type": "array"
            }
          },
          "type": "object"
        },
        "title": "Tabs",
        "type": "array"
      }
    },
    "type": "object"
  },
  {
    "_id": "pylvseoljret",
    "docType": "class",
    "title": "Views",
    "description": "<p>Views are important. They determine who gets to see/update what.</p><p>These are some of the things we do with queries</p><ul><li>Retrieve a set of children</li><li>Provide an icon for the tree node based on queryName</li><li>Determine popup menu/toolbar/buttons options: add/delete/associate/disassociate/copy/deepcopy for the tree node/table row based on queryName</li><li>Determine when buttons are hidden/disabled based on authorization, selected subDoc, mutually exclusive properties</li><li>Provide filtering for tables/trees</li><li>Determine drop allowed for DnD, which associations/disassociation</li><li>Find tree path based on given node for tree expand: reverse navigation</li></ul><p>&nbsp;</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ2OENGNTYxMDdDMTFFM0FGOUJCRTk2Mzc1ODMxMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ2OENGNTcxMDdDMTFFM0FGOUJCRTk2Mzc1ODMxMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDY4Q0Y1NDEwN0MxMUUzQUY5QkJFOTYzNzU4MzEyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDY4Q0Y1NTEwN0MxMUUzQUY5QkJFOTYzNzU4MzEyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnZsAM4AAAKZSURBVHjajFNbS1RRFP72OfuMMzqOTk5EIDqZQ0EzyNB46SXEsNGgMYp66WdUEoOUhZaO4m+IHnqT8PLSdJGgZtIoG80KHEMjKMHRYCTyXFv7xDEfurhhs1l7rfWd7/vWPqy6P72hGWalZVnYzWKMQZGlb7LE/CLmorkv0QTDNCH9p9mkLUsSesZnKiUmExgB6NRY5ea4nP4ETgjsL82Cn04IwydrIHpckAUfAWDB71ZwKOCFzGCj7iC8DSgADFHrcdlABmVMxkkCBa21btq12O1SqUchBsniOLjjXX5xEZBkmKYBYShjEj4uLaKwtmazEHeBQADxzlPQyS2Vvv6DKZAc71/OTCM1OACfrwIry8soKyvDemEdsaYWRBubcZTOQqFg1wqAZPE+NCZb28Z3nTkLhXN4vV7EGpvg8ZTauhVFgYu24nL9NpTY6STBFCY6l5MTY6RARm72NbZUFeEjEQSDQWQzz7cbReyYa9rCdgDEOzrwLJNFsK4OmqZi8/sm6utDCEciqPD5sEZeGLpu11ZbGzaAYMidsT1MPwAnBiNDKSrUYJJpnCtobWtDItGFifExzM/NwdJVXHQp0FxuizETXJF+IZyOt2M6m0Wk/QL2hxrsyX/+MIvixhLu3b2DEi4jcuIcqg9HIZEHX/JzeP+UZJdyViy/kUZ4ZAol9LiCkUZED3ixz+/BwYYWLORySC5X4W3uDeoojgbLsddfgtpwjEZOz//rtc7jm73xWP7m+ZimG5mFJ6NYJXFyBcfC1Cg0Xc+sXE/ExPmO4lWh28cx/3gUqqq9YjW3H2GLHsWl4iS6+4dDV7uvvLBMc4/ttSStD6SGmnt7kvnevlv1lJt2cqDcYGro2J/+HWGAMx1he+5fuZ8CDAD/Sv46ZbrYXQAAAABJRU5ErkJggg==",
    "parentId": "nrioirgelhpi",
    "properties": {
      "properties": {
        "title": "Properties",
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/additionalProperties"
        },
        "readOnly": true
      },
      "subQueryIds": {
        "title": "Initial Query",
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "q234ooehrk5v"
            }
          ],
          "sortBy": "name"
        },
        "type": "string",
        "readOnly": true
      },
      "baseClassId": {
        "title": "Base Class",
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "subclasses",
              "value": "gzthjuyjca4s"
            }
          ],
          "sortBy": "title"
        },
        "type": "string",
        "readOnly": true
      },
      "required": {
        "items": {
          "type": "string"
        },
        "title": "Required",
        "type": "array",
        "readOnly": true
      }
    },
    "definitions": {
      "additionalProperties": {
        "title": {
          "title": "Title",
          "type": "string",
          "maxLength": 100,
          "minLength": 1,
          "readOnly": true
        },
        "type": {
          "title": "Type",
          "enum": [
            "string",
            "number",
            "boolean",
            "array",
            "object",
            "date"
          ],
          "type": "string",
          "readOnly": true
        },
        "description": {
          "title": "Description",
          "placholder": "Add a description",
          "maxLength": 10000,
          "contentMediaType": "text/html",
          "minLength": 0,
          "type": "string",
          "readOnly": true
        },
        "readOnly": {
          "title": "Read Only",
          "type": "boolean",
          "readOnly": true
        },
        "default": {
          "title": "Default",
          "type": "string",
          "readOnly": true
        },
        "placeholder": {
          "title": "Placeholder",
          "type": "string",
          "readOnly": true
        },
        "pattern": {
          "title": "Pattern",
          "maxLength": 100,
          "minLength": 0,
          "type": "string",
          "readOnly": true
        },
        "maximum": {
          "title": "Maximum",
          "type": "number",
          "readOnly": true
        },
        "minimum": {
          "title": "Minimum",
          "type": "number",
          "readOnly": true
        },
        "maxLength": {
          "title": "Max Length",
          "type": "number",
          "readOnly": true
        },
        "minLength": {
          "title": "Min Length",
          "type": "number",
          "readOnly": true
        },
        "media": {
          "title": "Media",
          "type": "object",
          "properties": {
            "contentMediaType": {
              "title": "Media Type",
              "enum": [
                "text/html"
              ],
              "readOnly": true
            },
            "binaryEncoding": {
              "title": "Binary Encoding",
              "enum": [
                "base64"
              ],
              "readOnly": true
            },
            "type": {
              "title": "Type",
              "enum": [
                "image/png"
              ]
            },
            "readOnly": true
          },
          "readOnly": true
        },
        "enum": {
          "title": "Enum",
          "type": "array",
          "items": {
            "properties": {
              "type": "string",
              "readOnly": true
            }
          },
          "readOnly": true
        },
        "query": {
          "title": "Query",
          "type": "object",
          "properties": {
            "where": {
              "items": {
                "additionalProperties": false,
                "properties": {
                  "docProp": {
                    "maxLength": 1000,
                    "minLength": 0,
                    "title": "Document Property",
                    "type": "string",
                    "readOnly": true
                  },
                  "operator": {
                    "enum": [
                      "eq",
                      "in",
                      "instances",
                      "subclasses",
                      "litteral"
                    ],
                    "title": "Operator",
                    "type": "string",
                    "readOnly": true
                  },
                  "value": {
                    "maxLength": 1000,
                    "minLength": 0,
                    "title": "Value",
                    "type": "string",
                    "readOnly": true
                  },
                  "valuePath": {
                    "maxLength": 1000,
                    "minLength": 0,
                    "title": "Value Path",
                    "type": "string",
                    "readOnly": true
                  },
                  "mapValue": {
                    "maxLength": 1000,
                    "minLength": 0,
                    "title": "Map Value",
                    "type": "string",
                    "readOnly": true
                  }
                },
                "title": "Where",
                "type": "object"
              },
              "title": "And Array",
              "type": "array"
            },
            "sortBy": {
              "title": "Sort By",
              "type": "string",
              "readOnly": true
            }
          }
        },
        "properties": {
          "title": "Properties",
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/additionalProperties"
          },
          "readOnly": true
        },
        "items": {
          "title": "Items",
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/additionalProperties"
          },
          "readOnly": true
        }
      }
    },
    "pageId": "qwhjia43h1s4",
    "type": "object"
  },
  {
    "_id": "q234ooehrk5v",
    "docType": "class",
    "title": "Queries",
    "description": "<p>Queriwes used by views</p>",
    "parentId": "nrioirgelhpi",
    "pageId": "qcd1eefe432r",
    "properties": {
      "icon": {
        "maxLength": 2000,
        "media": {
          "binaryEncoding": "base64",
          "type": "image/png"
        },
        "minLength": 0,
        "title": "Icon",
        "type": "string",
        "readOnly": true
      },
      "subQueryIds": {
        "items": {
          "properties": {
            "queryId": {
              "title": "Subquery",
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "q234ooehrk5v"
                  }
                ],
                "sortBy": "name"
              },
              "type": "string",
              "readOnly": true
            }
          },
          "type": "object"
        },
        "title": "Sub-Queries",
        "type": "array"
      },
      "pageId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "pejdgrwd5qso"
            }
          ],
          "sortBy": "name"
        },
        "title": "Page",
        "type": "string",
        "readOnly": true
      },
      "where": {
        "items": {
          "additionalProperties": false,
          "properties": {
            "docProp": {
              "maxLength": 1000,
              "minLength": 0,
              "title": "Document Property",
              "type": "string",
              "readOnly": true
            },
            "operator": {
              "enum": [
                "eq",
                "in",
                "instances",
                "subclasses",
                "litteral"
              ],
              "title": "Operator",
              "type": "string",
              "readOnly": true
            },
            "value": {
              "maxLength": 1000,
              "minLength": 0,
              "title": "Value",
              "type": "string",
              "readOnly": true
            },
            "valuePath": {
              "maxLength": 1000,
              "minLength": 0,
              "title": "Value Path",
              "type": "string",
              "readOnly": true
            },
            "mapValue": {
              "maxLength": 1000,
              "minLength": 0,
              "title": "Map Value",
              "type": "string",
              "readOnly": true
            }
          },
          "title": "Where",
          "type": "object"
        },
        "title": "And Array",
        "type": "array"
      }
    },
    "type": "object"
  },
  {
    "_id": "siutzqsj5dgc",
    "docType": "class",
    "title": "Paragraphs",
    "description": "<p>Ordinary HTML pages</p>",
    "parentId": "nrioirgelhpi",
    "properties": {
      "subParagraphIds": {
        "items": {
          "properties": {
            "documentId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "siutzqsj5dgc"
                  }
                ],
                "sortBy": "name"
              },
              "title": "Sub Ducument",
              "type": "string",
              "readOnly": true
            }
          },
          "type": "object"
        },
        "title": "Sub Paragraph",
        "type": "array",
        "readOnly": true
      }
    },
    "pageId": "nnksb2zyphob",
    "type": "object"
  },
  {
    "_id": "lmxjrogzeld1",
    "docType": "object",
    "name": "Purchase Agreement",
    "description": "Buy a bike",
    "startDate": "2019-07-10",
    "expirationDate": "2019-07-24",
    "amount": "150.22",
    "assetId": "pwyzd1adoyzu",
    "buyerId": "demouser1111",
    "classId": "hhg2u2zptnfo",
    "currency": "EUR",
    "processId": "ynaxakdc423e",
    "sellerProcessId": "h3q1vchxahoh",
    "sellerId": "bikeshop1111",
    "processStack": [
      {
        "processId": "ynaxakdc423e",
        "stateId": "yefagaab4ua2"
      }
    ]
  },
  {
    "processId": "ynaxakdc423e",
    "sellerProcessId": "h3q1vchxahoh",
    "agreementProcessId": "ynaxakdc423e",
    "assetId": "4htc3ykicyzj",
    "docType": "object",
    "classId": "w3mzeetidb5n",
    "sellerId": "bikeshop1111",
    "processStack": [
      {
        "processId": "ynaxakdc423e",
        "stateId": "3hxkire2nn4v"
      }
    ],
    "startDate": "2019-10-26T11:36:03.809Z",
    "agreementHistoryIds": [
      "trmnlwypvlnq",
      "4caczktyxzm5",
      "dp3ooabnibu5",
      "juoinvyykf4t",
      "omqequgsfzkh",
      "tovhfrfjfhrj",
      "xkuhdep5u3vs",
      "altduhtklcwv",
      "mh1u3yc2fwzj",
      "52efxse2sjxf"
    ],
    "buyerId": "platoscave11",
    "_id": "ab2wltcolqz1",
    "isDirty": true,
    "stateDate": "2019-10-26T11:36:29.145Z"
  },
  {
    "_id": "onppie1b2c4k",
    "docType": "object",
    "name": "What are you doing this evening?",
    "description": "<p>Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.</p>",
    "startDate": "2019-07-10",
    "expirationDate": "2019-07-24",
    "buyerId": "demouser2222",
    "classId": "w3mzeetidb5n",
    "sellerId": "demouser1111",
    "processStack": [
      {
        "processId": "cie1pllxq5mu",
        "stateId": "bavb2g1inh2t"
      }
    ]
  },
  {
    "processId": "ynaxakdc423e",
    "sellerProcessId": "h3q1vchxahoh",
    "agreementProcessId": "ynaxakdc423e",
    "assetId": "pwyzd1adoyzu",
    "docType": "object",
    "classId": "w3mzeetidb5n",
    "sellerId": "bikeshop1111",
    "processStack": [
      {
        "processId": "h3q1vchxahoh",
        "stateId": "yefagaab4ua2"
      },
      {
        "processId": "ynaxakdc423e",
        "stateId": "3edgchx5lgu3"
      }
    ],
    "startDate": "2019-10-27T07:58:01.768Z",
    "agreementHistoryIds": [
      "p2faabdypbnv",
      "nis2slj2ocoi",
      "hhryhzffmg3d",
      "yrxotdaks2nk",
      "lxxpxne2ffcr"
    ],
    "buyerId": "demouser1111",
    "_id": "pzevkjmtljvu",
    "isDirty": true,
    "stateDate": "2019-10-27T07:58:10.759Z"
  },
  {
    "_id": "twviawzlgofz",
    "docType": "object",
    "name": "Request for comment",
    "description": "<p>Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.</p>",
    "startDate": "2019-07-10",
    "expirationDate": "2019-07-24",
    "buyerId": "demouser1111",
    "classId": "w3mzeetidb5n",
    "sellerId": "eoscommonsio",
    "processStack": [
      {
        "processId": "cie1pllxq5mu",
        "stateId": "oltp4kpj4fvi"
      }
    ],
    "agreementHistoryIds": [
      "3a1qf1ogj1an",
      "vwpi4s1zvyit"
    ]
  },
  {
    "_id": "clinreceptio",
    "docType": "object",
    "name": "Clinic Reception",
    "description": "<div class='nqSpanColumn' style='position: relative;'><img src='app/resources/img/Neuralquest/lefkasHome1.png' width='100%' height='100px'><div class='headline'>Client</div></div><p>The Neuralquest client</p>",
    "classId": "dasprps1lrwf",
    "ownerId": "clinic111111",
    "authorizedForStateIds": [
      "tfkyaytuac1g"
    ],
    "permissions": [
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "eoscommonsio",
                "permission": "owner"
              },
              "weight": 1
            }
          ]
        }
      },
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "demouser2222",
                "permission": "active"
              },
              "weight": 1
            }
          ]
        }
      }
    ]
  },
  {
    "_id": "clinconsulti",
    "docType": "object",
    "name": "Clinic Consulting Room",
    "description": "<div class='nqSpanColumn' style='position: relative;'><img src='app/resources/img/Neuralquest/lefkasHome1.png' width='100%' height='100px'><div class='headline'>Server</div></div><p>The Neuralquest server</p>",
    "classId": "dasprps1lrwf",
    "ownerId": "clinic111111",
    "authorizedForStateIds": [
      "tfkyaytuac1g"
    ],
    "permissions": [
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "eoscommonsio",
                "permission": "owner"
              },
              "weight": 1
            }
          ]
        }
      },
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "demouser1111",
                "permission": "active"
              },
              "weight": 1
            }
          ]
        }
      }
    ]
  },
  {
    "_id": "jotcvffqbzfp",
    "docType": "object",
    "name": "Service Desk",
    "description": "<div class='nqSpanColumn' style='position: relative;'><img src='app/resources/img/Neuralquest/lefkasHome1.png' width='100%' height='100px'><div class='headline'>The Standard Model</div></div><p>The Neuralquest client</p>",
    "classId": "dasprps1lrwf",
    "ownerId": "eoscommonsio",
    "authorizedForStateIds": [
      "oltp4kpj4fvi"
    ],
    "permissions": [
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "eoscommonsio",
                "permission": "owner"
              },
              "weight": 1
            }
          ]
        }
      },
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "platoscave11",
                "permission": "active"
              },
              "weight": 1
            }
          ]
        }
      }
    ]
  },
  {
    "_id": "bikefrondesk",
    "docType": "object",
    "name": "Front Desk",
    "description": "<div class='nqSpanColumn' style='position: relative;'><img src='app/resources/img/Neuralquest/ACMEBicyleShop.png' width='100%' height='100px'><div class='headline'>Front Desk</div></div>",
    "classId": "dasprps1lrwf",
    "ownerId": "bikeshop1111",
    "authorizedForStateIds": [
      "yefagaab4ua2"
    ],
    "permissions": [
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "bikeshop1111",
                "permission": "owner"
              },
              "weight": 1
            }
          ]
        }
      },
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "demouser1111",
                "permission": "active"
              },
              "weight": 1
            }
          ]
        }
      }
    ]
  },
  {
    "_id": "bikeworkshop",
    "docType": "object",
    "name": "Workshop",
    "description": "<div class='nqSpanColumn' style='position: relative;'><img src='app/resources/img/Neuralquest/ACMEBicyleShop.png' width='100%' height='100px'><div class='headline'>Workshop</div></div><p>ACME Workshop</p>",
    "classId": "dasprps1lrwf",
    "ownerId": "bikeshop1111",
    "authorizedForStateIds": [
      "pvk5ngmorf4z"
    ],
    "permissions": [
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "bikeshop1111",
                "permission": "owner"
              },
              "weight": 1
            }
          ]
        }
      },
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "accounts": [
            {
              "permission": {
                "actor": "demouser2222",
                "permission": "active"
              },
              "weight": 1
            }
          ]
        }
      }
    ]
  },
  {
    "_id": "platoscave11",
    "docType": "object",
    "name": "platoscave",
    "classId": "hdt3hmnsaghk",
    "account_name": "platoscave11",
    "head_block_num": 73306938,
    "head_block_time": "2019-08-10T14:49:54.500",
    "privileged": false,
    "last_code_update": "1970-01-01T00:00:00.000",
    "created": "2018-06-17T11:58:51.500",
    "core_liquid_balance": "1.9920 EOS",
    "ram_quota": 5378,
    "net_weight": 21000,
    "cpu_weight": 21000,
    "net_limit": {
      "used": 145,
      "available": 1888827,
      "max": 1888972
    },
    "cpu_limit": {
      "used": 275,
      "available": 337191,
      "max": 337466
    },
    "ram_usage": 3822,
    "permissions": [
      {
        "perm_name": "active",
        "parent": "owner",
        "required_auth": {
          "threshold": 1,
          "keys": [
            {
              "_id": "EOS54DNgfqCZifsFGKY6J2UGL8Yxyie8XLh2jSW96bgUK3fDyRpsK",
              "weight": 1
            }
          ],
          "accounts": [],
          "waits": []
        }
      },
      {
        "perm_name": "owner",
        "parent": "",
        "required_auth": {
          "threshold": 1,
          "keys": [
            {
              "_id": "EOS54DNgfqCZifsFGKY6J2UGL8Yxyie8XLh2jSW96bgUK3fDyRpsK",
              "weight": 1
            }
          ],
          "accounts": [
            {
              "permission": {
                "actor": "eoscafeblock",
                "permission": "claimrewards"
              },
              "weight": 1
            }
          ],
          "waits": [
            {
              "wait_sec": "3600",
              "weight": 1
            }
          ]
        }
      }
    ],
    "total_resources": {
      "owner": "platoscave11",
      "net_weight": "2.1000 EOS",
      "cpu_weight": "2.1000 EOS",
      "ram_bytes": 3978
    },
    "self_delegated_bandwidth": {
      "from": "platoscave11",
      "to": "platoscave11",
      "net_weight": "2.0000 EOS",
      "cpu_weight": "2.0000 EOS"
    },
    "refund_request": null,
    "voter_info": {
      "owner": "platoscave11",
      "proxy": "",
      "producers": [
        "cypherglasss"
      ],
      "staked": 40000,
      "last_vote_weight": "27745957383.52319717407226562",
      "proxied_vote_weight": "0.00000000000000000",
      "is_proxy": 0,
      "flags1": 0,
      "reserved2": 0,
      "reserved3": "0 "
    }
  },
  {
    "_id": "demouser1111",
    "docType": "object",
    "name": "Demo User 1111",
    "classId": "hdt3hmnsaghk"
  },
  {
    "_id": "demouser2222",
    "docType": "object",
    "name": "Demo User 2222",
    "classId": "hdt3hmnsaghk"
  },
  {
    "_id": "testuser3333",
    "docType": "object",
    "name": "Demo User 3333",
    "classId": "hdt3hmnsaghk"
  },
  {
    "_id": "3st1rw53qugx",
    "docType": "class",
    "title": "Intangible Assets",
    "description": "<p>Intangible Assets owned by users/organizations</p>",
    "parentId": "3ihg3mjdbqzv",
    "type": "object"
  },
  {
    "_id": "wrkevvx2cvzs",
    "docType": "class",
    "title": "Investments",
    "description": "<p>Investments owned by users/organizations</p>",
    "parentId": "3ihg3mjdbqzv",
    "type": "object"
  },
  {
    "_id": "xpra3jnokvas",
    "docType": "class",
    "title": "Property, Plant and Equipment",
    "description": "<p>Property, Plant and Equipment owned by users/organizations</p>",
    "parentId": "3ihg3mjdbqzv",
    "type": "object"
  },
  {
    "_id": "zbi1e31jzb1u",
    "docType": "class",
    "title": "Current Assets",
    "description": "<p>Current Assets owned by users/organizations</p>",
    "parentId": "3ihg3mjdbqzv",
    "type": "object"
  },
  {
    "_id": "4r2rhlh4gvqw",
    "docType": "class",
    "title": "Stockholder's Equity",
    "description": "<p>Stockholder's Equity owned by users/organizations</p>",
    "parentId": "sgefdtu1bttq",
    "type": "object"
  },
  {
    "_id": "u4prbnlw4emq",
    "docType": "class",
    "title": "Liabilities",
    "description": "<p>Liabilities owned by users/organizations</p>",
    "parentId": "sgefdtu1bttq",
    "type": "object"
  },
  {
    "_id": "1jrqyjoabx1a",
    "docType": "class",
    "title": "Open",
    "description": "<p>Open</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ1JREFUeNpi/P//PwMlgImBQjDwBrAETGAkSiEopP79Y5j19z9DKjMjAyMT0GqwTlAgEotdOxn+33yy5L9zO4j7n8GvH2iITy/D+t9/GQKApjP8x2M90GYGG1UGBkVRBgYjhdkMxctTGfZU/Gdk+QPU3BWTyvDrzx8GfDH67z/ItcwMl5/OYTjzNJWhNbyNwbOb8T8LyB/X3s8GGsCA1wCQ3F+gKxnYIUH/9c87sDijSy3DOlZehsB/BDSDvGhtDPSCPAOD8P9UhokbZjPsqWQwAckDhRiMicHuHQz/N9wK+e/WDg4uY3Ag+vcTH+cfnzFM4xZnyNxawmAC1HyWkYx0Iwl1DRwwDv3MBBBgAJlZhvyadk3fAAAAAElFTkSuQmCC",
    "parentId": "dlpwvptczyeb",
    "properties": {
      "nextStateIds": {
        "items": {
          "properties": {
            "action": {
              "maxLength": 100,
              "title": "Action",
              "type": "string",
              "readOnly": true
            },
            "stateId": {
              "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
              "query": {
                "where": [
                  {
                    "docProp": "classId",
                    "operator": "instances",
                    "value": "dlpwvptczyeb"
                  }
                ],
                "sortBy": "name"
              },
              "title": "State",
              "type": "string",
              "readOnly": true
            }
          },
          "required": [
            "action",
            "stateId"
          ],
          "type": "object"
        },
        "title": "Next States",
        "type": "array",
        "readOnly": true
      },
      "substateId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "instances",
              "value": "1jrqyjoabx1a"
            }
          ],
          "sortBy": "name"
        },
        "title": "Substate",
        "type": "string",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "s41na42wsxez",
    "docType": "class",
    "title": "Closed",
    "description": "<p>Closed</p>",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ1JREFUeNpi/P//PwMlgImBQjDwBrAETGAkSiEopP79Y5j19z9DKjMjAyMT0GqwTlAgEotdOxn+33yy5L9zO4j7n8GvH2iITy/D+t9/GQKApjP8x2M90GYGG1UGBkVRBgYjhdkMxctTGfZU/Gdk+QPU3BWTyvDrzx8GfDH67z/ItcwMl5/OYTjzNJWhNbyNwbOb8T8LyB/X3s8GGsCA1wCQ3F+gKxnYIUH/9c87sDijSy3DOlZehsB/BDSDvGhtDPSCPAOD8P9UhokbZjPsqWQwAckDhRiMicHuHQz/N9wK+e/WDg4uY3Ag+vcTH+cfnzFM4xZnyNxawmAC1HyWkYx0Iwl1DRwwDv3MBBBgAJlZhvyadk3fAAAAAElFTkSuQmCC",
    "parentId": "dlpwvptczyeb",
    "type": "object"
  },
  {
    "_id": "eoscommonsio",
    "docType": "object",
    "name": "eos-commons.io",
    "description": "<div class=\"layout align-center justify-space-around fill-height wrap\" style=\"background-color: navy; height: 500px; color: white; font-size: 16px\"><div class=\"flex xs3\"><h1>eos-commons.io</h1><p><i>...bringing process modeling to the blockchain.</i></p><p>Writing smart contracts that meet your organizations needs is hard.</p><p>eos-commons.io makes it alot easier by providing template organizations that you can copy and process modeling facilities. These include an exstsible class model, layout/page design, 3D process model and much more.</p></div><div class=\"flex xs3\"><h1>eos-commons.io</h1><p>Bringing process modeling to the blockchain</p></div></div><div class=\"layout align-center justify-space-around fill-height wrap\" style=\"background-color: blue; height: 300px; color: white; font-size: 16px\"><div class=\"flex xs3\"><h1>eos-commons.io</h1><p><i>...bringing process modeling to the blockchain.</i></p><p>Writing smart contracts that meet your organizations needs is hard.</p><p>eos-commons.io makes it alot easier by providing template organizations that you can copy and process modeling facilities. These include an exstsible class model, layout/page design, 3D process model and much more.</p></div><div class=\"flex xs3\"><h1>eos-commons.io</h1><p>Bringing process modeling to the blockchain</p></div></div>",
    "classId": "be1ub1vtofjo",
    "icon": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjODBiM2ZmIiBkPSJNIDEyLjQ3MjQzNSwwLjQ1NDUxNDU4IDEyLjY2MTgzNSwxNy4xNDk5NTcgMS41NzA5MjM4LDE4LjAwNzMzOCBaIi8+CiAgICA8cGF0aCBmaWxsPSIjODBiM2ZmIiBkPSJtIDE0LjI3NzY2NiwzLjMzMDI1MiAwLjQwNDE2MSwxMy41MjMyMzggOC4wMDgwMTYsMC41ODg2NDcgeiIvPgogICAgPHBhdGggZmlsbD0iIzgwODBmZiIgZD0iTSAwLjE0MTQwNTMyLDE5LjQ2MjE3OCA5LjY1MjUxNjMsMjMuODcyMTIyIDIzLjk3NjcxMSwxOC4zNjkxOTggWiIvPgogIDwvZz4KPC9zdmc+Cg==",
    "subParagraphIds": "xqxkmto5njxi",
    "exposedToProcessesIds": [
      "cie1pllxq5mu"
    ]
  },
  {
    "_id": "clinic111111",
    "docType": "object",
    "name": "ACME Health Care Clinic",
    "description": "<div class=\"layout align-center justify-space-around fill-height wrap\" style=\"background-color: #76448A; height: 500px; color: white; font-size: 16px\"><div class=\"flex xs3\"><h1>ACME Health Care Clinic</h1><p><i>Stay fit, live long.</i></p><h2>Call for an appointment</h2></div><div class=\"flex xs3\"><h1>Image</h1></div></div>",
    "classId": "be1ub1vtofjo",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtklEQVQ4T5WSsUtbURTGz3dfiFEzFKFL1Xtv8p4g2sFOFdql0E5tQTJlkHZ16FQo/gOdnBw6dA4dhKKTdHDKIJKpUy2heUneTYKLIBLakERzT3liIAlJSO50z3e+8zv3XA6o57hSPgPECRHN9eo99wYTvyoac9bV0AdQiQ+wt5/Icd4RUV/uzmdthuHsFU35y2gA8Y5vgsfDXuAp/YsJX/sArtb7zIiHBYJ5jUCrlnA0DCCIU8SUt8DvMO+QbcBT+goCW50O7Ii5R8qC7Xckla6VTLA06Fp/uB5vRVsPQn2mPXN9fnn+d9DjSpkfCfBU4hsRxe6Lmr4pb08FcJf1Yaw5/z4sasf+ZQrVIDURwNP6hBltEDtLRr/NUpY9KQ+JRRQC0YIpv+yCho7gqcSpb8rPB7tprWORTifnV6sbYwFJpXIA9pm5XjLmR2heUeo1s1iwxB9LleDJWICr1AuwWCTY3cbNzdPQPBuJ/AQ5n0lwzQ+C7FhAN+lJecBCHIQxrE37lUp6ok/smlZk8g2BN+9iRq5QKR0PBbhKXxRN8GjaLQz9ntZ/kJSyTkBTWJ5ulZlAjoj/B4u9x9M8LUgYAAAAAElFTkSuQmCC",
    "pageId": "4devwsepaig1",
    "exposedToProcessesIds": [
      "cie1pllxq5mu"
    ]
  },
  {
    "_id": "bikeshop1111",
    "docType": "object",
    "name": "ACME Bicycle Shop",
    "description": "<div class=\"layout align-center justify-space-around fill-height wrap\" style=\"background-color: green; height: 500px; color: white; font-size: 16px\"><div class=\"flex xs3\"><h1>ACME Bicycle Shop</h1><p><i>Enjoy the fresh air.</i></p><h2>For Rent Sale or Repair</h2></div><div class=\"flex xs6\"><img src=\"bicycle-788733_960_720.jpg\" height=\"500\"></div></div>",
    "classId": "zx5ffzoa5euy",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4T61Tv2sUURD+Zt7undFYqKTKsW/v7p0YDqwEGxst/EUKbcQiYKGIAUGRVIqKTYpYiBjQSiEGSSPIgYX5C+wEUSx8t7e3kassDAlL4vneyIKBxICFl2mGGeZ988038wgDGg34HjsLYKKoCeYRAIIgeG+t7Teq1WMiwuLU9/ZS+9PfjLcwaES1cWE/DZEFhOFsuVxeW19dvSJgFvgJKHUqSZLlzSDbRjBxPOkEUwz6srXQaxA9t2n6aBtAvVI3FLhx8ZQz4YJ4UT7kcxvd4jjeFQpeiHdjpNRTAXbDuZZdWmpTXeszLHRdQM9AuASSg/A0A0jdZumDQ6OjB34F4TwR3ohzt8HcIlHvAD8pih5TI4rflvbuOZ/n+T5ybg4+mKLAXyaBBmQGnqbBckuEriqhV57cHZtlp40xZem712R0dd52OxMFExG5ycxrIjgiwA8GxCs+myRJZqJowWbZRVOtnrSdzmKhQ03rl2S0nsv7/Wu9Xi8vko04PirAcZumD/+I5Qpvovg+SFq22/1QxM2R5vDPoZVZqlVqDSh3j4UXCbLfw49RqXTDWru+We1KpTJUUuETJvkMkWWATyj4uxtrVEbrw+KClfa3tv3XeRcb48ANf03TjwD8zp7y/3ysgRn8BlTuy14MbVpqAAAAAElFTkSuQmCC",
    "pageId": "2kjjzqr2i5o5",
    "subUnitIds": [
      "bikefrondesk",
      "bikeworkshop"
    ],
    "exposedToProcessesIds": [
      "ynaxakdc423e"
    ]
  },
  {
    "_id": "bmsvo1ebgpxx",
    "docType": "class",
    "title": "Goodwill",
    "description": "<p>Goodwill owned by users/organizations</p>",
    "parentId": "3st1rw53qugx",
    "type": "object"
  },
  {
    "_id": "hm1nlusa3c51",
    "docType": "class",
    "title": "Trade Names",
    "description": "<p>Trade Names owned by users/organizations</p>",
    "parentId": "3st1rw53qugx",
    "type": "object"
  },
  {
    "_id": "1jexzlqdnhsu",
    "docType": "class",
    "title": "Equipment",
    "description": "<p>Equipment owned by users/organizations</p>",
    "parentId": "xpra3jnokvas",
    "type": "object"
  },
  {
    "_id": "1rj2pxp22h2x",
    "docType": "class",
    "title": "Land",
    "description": "<p>Land owned by users/organizations</p>",
    "parentId": "xpra3jnokvas",
    "type": "object"
  },
  {
    "_id": "ft2ai3uocmxq",
    "docType": "class",
    "title": "Less: Accum Deprecation",
    "description": "<p>Less: Accum Deprecation owned by users/organizations</p>",
    "parentId": "xpra3jnokvas",
    "type": "object"
  },
  {
    "_id": "txvkztvvgdgx",
    "docType": "class",
    "title": "Land Improvements",
    "description": "<p>Land Improvements owned by users/organizations</p>",
    "parentId": "xpra3jnokvas",
    "type": "object"
  },
  {
    "_id": "wgf2tigutjme",
    "docType": "class",
    "title": "Buildings",
    "description": "<p>Buildings owned by users/organizations</p>",
    "parentId": "xpra3jnokvas",
    "type": "object"
  },
  {
    "_id": "cgwdxsoekxr3",
    "docType": "class",
    "title": "Petty Cash",
    "description": "<p>Petty Cash owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "type": "object"
  },
  {
    "_id": "emssafohapp3",
    "docType": "class",
    "title": "Temporary Investments",
    "description": "<p>Temporary Investments owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "type": "object"
  },
  {
    "_id": "my142mxokill",
    "docType": "class",
    "title": "Prepaid Insurance",
    "description": "<p>Prepaid Insurance owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "type": "object"
  },
  {
    "_id": "nlmgc3dmrwxs",
    "docType": "class",
    "title": "Inventory",
    "description": "<p>Inventory owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "properties": {
      "imageUrl": {
        "format": "uri",
        "title": "Image",
        "type": "string",
        "media": {
          "type": "image/png"
        },
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "qhybqzojgu3c",
    "docType": "class",
    "title": "Accounts Receivible -net",
    "description": "<p>Accounts Receivible -net owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "type": "object"
  },
  {
    "_id": "x4i32i5xdwnb",
    "docType": "class",
    "title": "Supplies",
    "description": "<p>Supplies owned by users/organizations</p>",
    "parentId": "zbi1e31jzb1u",
    "type": "object"
  },
  {
    "_id": "1bqgan41c55z",
    "docType": "class",
    "title": "Retained Earnings",
    "description": "<p>Retained Earnings owned by users/organizations</p>",
    "parentId": "4r2rhlh4gvqw",
    "type": "object"
  },
  {
    "_id": "2ldk2a2lqo35",
    "docType": "class",
    "title": "Accum Other Comprehensive Income",
    "description": "<p>Accum Other Comprehensive Income owned by users/organizations</p>",
    "parentId": "4r2rhlh4gvqw",
    "type": "object"
  },
  {
    "_id": "5ke5dozqwj34",
    "docType": "class",
    "title": "Less: Treasury Stock",
    "description": "<p>Less: Treasury Stock owned by users/organizations</p>",
    "parentId": "4r2rhlh4gvqw",
    "type": "object"
  },
  {
    "_id": "zob5kwxrv2y4",
    "docType": "class",
    "title": "Common Stock",
    "description": "<p>Common Stock owned by users/organizations</p>",
    "parentId": "4r2rhlh4gvqw",
    "type": "object"
  },
  {
    "_id": "thrjrlfgcjrt",
    "docType": "class",
    "title": "Long-Term Libilities",
    "description": "<p>Long-Term Libilities owned by users/organizations</p>",
    "parentId": "u4prbnlw4emq",
    "type": "object"
  },
  {
    "_id": "yiajzp3bwqsc",
    "docType": "class",
    "title": "Current Libilities",
    "description": "<p>Current Libilities owned by users/organizations</p>",
    "parentId": "u4prbnlw4emq",
    "type": "object"
  },
  {
    "_id": "ahp433id2bo3",
    "docType": "class",
    "title": "User Input",
    "description": "<p>User Input</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAuMDAwMDAwMDAwMDAwMDEiIGhlaWdodD0iNTAuMDAwMDAwMDAwMDAwMDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiMwMDAwZmYiIGlkPSJzdmdfMSIgZD0ibTQ4Ljg4MiwyMi41ODVsLTQuMjcxLC0xLjQxMmMtMC4xNzYsLTAuOTA4IC0wLjQxNiwtMS44MDQgLTAuNzE0LC0yLjY3M2wyLjk5OCwtMy4zNjJsLTAuMjkyLC0wLjYwM2MtMC41MDYsLTEuMDQzIC0xLjA5NCwtMi4wNTkgLTEuNzQ2LC0zLjAxOGwtMC4zNzYsLTAuNTUzbC00LjM5MSwwLjkxNGMtMC42MDksLTAuNyAtMS4yNjksLTEuMzU5IC0xLjk2OCwtMS45NjlsMC45MTQsLTQuMzkxbC0wLjU1MywtMC4zNzZjLTAuOTYzLC0wLjY1NSAtMS45NzksLTEuMjQyIC0zLjAxNywtMS43NDVsLTAuNjAyLC0wLjI5MmwtMy4zNjQsMi45OTljLTAuODcxLC0wLjI5OSAtMS43NjYsLTAuNTM4IC0yLjY3MywtMC43MTRsLTEuNDEzLC00LjI3MWwtMC42NjYsLTAuMDQ5Yy0xLjE1NSwtMC4wODQgLTIuMzQsLTAuMDg0IC0zLjQ5NSwwbC0wLjY2NywwLjA0OGwtMS40MTMsNC4yNzJjLTAuOTA3LDAuMTc2IC0xLjgwMiwwLjQxNSAtMi42NzMsMC43MTRsLTMuMzYzLC0yLjk5OWwtMC42MDMsMC4yOTNjLTEuMDQ0LDAuNTA4IC0yLjA2LDEuMDk1IC0zLjAxNywxLjc0NmwtMC41NTMsMC4zNzdsMC45MTQsNC4zOWMtMC43LDAuNjA5IC0xLjM1OSwxLjI2OSAtMS45NjgsMS45NjhsLTQuMzksLTAuOTEzbC0wLjM3NiwwLjU1M2MtMC42NTMsMC45NiAtMS4yNDEsMS45NzUgLTEuNzQ3LDMuMDE4bC0wLjI5MiwwLjYwM2wyLjk5OCwzLjM2Yy0wLjI5OCwwLjg2OSAtMC41MzcsMS43NjQgLTAuNzEzLDIuNjczbC00LjI3MSwxLjQxMmwtMC4wNDksMC42NjdjLTAuMDQyLDAuNTc5IC0wLjA3LDEuMTU5IC0wLjA3LDEuNzQ4czAuMDI4LDEuMTY5IDAuMDcsMS43NDhsMC4wNDgsMC42NjdsNC4yNzEsMS40MTJjMC4xNzYsMC45MDggMC40MTYsMS44MDQgMC43MTQsMi42NzNsLTIuOTk4LDMuMzYybDAuMjkyLDAuNjAzYzAuNTA2LDEuMDQzIDEuMDk0LDIuMDU5IDEuNzQ2LDMuMDE4bDAuMzc2LDAuNTUzbDQuMzkxLC0wLjkxNGMwLjYwOSwwLjcgMS4yNjksMS4zNTkgMS45NjgsMS45NjlsLTAuOTE0LDQuMzkxbDAuNTUzLDAuMzc2YzAuOTYzLDAuNjU1IDEuOTc5LDEuMjQyIDMuMDE3LDEuNzQ1bDAuNjAyLDAuMjkybDMuMzYzLC0yLjk5N2MwLjg3MSwwLjI5OSAxLjc2NiwwLjUzOCAyLjY3MywwLjcxNGwxLjQxMyw0LjI3MWwwLjY2NywwLjA0OGMwLjU3OCwwLjA0MSAxLjE2LDAuMDY5IDEuNzQ4LDAuMDY5czEuMTcsLTAuMDI4IDEuNzQ4LC0wLjA3bDAuNjY3LC0wLjA0OGwxLjQxMiwtNC4yNzFjMC45MDksLTAuMTc2IDEuODA0LC0wLjQxNSAyLjY3MywtMC43MTRsMy4zNjMsMi45OTlsMC42MDMsLTAuMjkzYzEuMDQ0LC0wLjUwOCAyLjA2LC0xLjA5NSAzLjAxNywtMS43NDZsMC41NTMsLTAuMzc3bC0wLjkxNCwtNC4zOWMwLjcsLTAuNjA5IDEuMzU5LC0xLjI2OSAxLjk2OCwtMS45NjhsNC4zOSwwLjkxM2wwLjM3NiwtMC41NTNjMC42NTMsLTAuOTYgMS4yNDEsLTEuOTc1IDEuNzQ3LC0zLjAxOGwwLjI5MiwtMC42MDNsLTIuOTk5LC0zLjM2MWMwLjI5OCwtMC44NjkgMC41MzgsLTEuNzY1IDAuNzE0LC0yLjY3M2w0LjI3MSwtMS40MTJsMC4wNDgsLTAuNjY3YzAuMDQzLC0wLjU3OSAwLjA3MSwtMS4xNTkgMC4wNzEsLTEuNzQ4cy0wLjAyOCwtMS4xNjkgLTAuMDcsLTEuNzQ4bC0wLjA0OCwtMC42Njd6bS0xLjkwNiwzLjM1M2wtNC4xMzUsMS4zNjdsLTAuMDk4LDAuNTk5Yy0wLjE5MiwxLjE4NyAtMC41MDMsMi4zNTIgLTAuOTI0LDMuNDYybC0wLjIxNSwwLjU2N2wyLjg5OSwzLjI1MmMtMC4yODksMC41NTIgLTAuNjAxLDEuMDkyIC0wLjkzNiwxLjYxN2wtNC4yNDcsLTAuODg0bC0wLjM4NCwwLjQ2OWMtMC43NjEsMC45MyAtMS42MTksMS43ODcgLTIuNTQ5LDIuNTQ5bC0wLjQ2OSwwLjM4NGwwLjg4NCw0LjI0OGMtMC41MjQsMC4zMzMgLTEuMDY0LDAuNjQ2IC0xLjYxNiwwLjkzNmwtMy4yNTIsLTIuOWwtMC41NjcsMC4yMTZjLTEuMTExLDAuNDIxIC0yLjI3NSwwLjczMSAtMy40NjEsMC45MjRsLTAuNTk5LDAuMDk4bC0xLjM2Nyw0LjEzNWMtMC42MjIsMC4wMzEgLTEuMjU1LDAuMDMxIC0xLjg3NywwbC0xLjM2OCwtNC4xMzVsLTAuNTk5LC0wLjA5OGMtMS4xODMsLTAuMTkxIC0yLjM0NywtMC41MDMgLTMuNDYyLC0wLjkyNWwtMC41NjcsLTAuMjE0bC0zLjI1MywyLjg5OGMtMC41NDksLTAuMjg3IC0xLjA5LC0wLjYwMSAtMS42MTYsLTAuOTM2bDAuODg0LC00LjI0N2wtMC40NjksLTAuMzg0Yy0wLjkyOSwtMC43NjEgLTEuNzg3LC0xLjYxOCAtMi41NDgsLTIuNTQ5bC0wLjM4NCwtMC40N2wtNC4yNDgsMC44ODVjLTAuMzM0LC0wLjUyNSAtMC42NDcsLTEuMDY1IC0wLjkzNiwtMS42MTdsMi44OTksLTMuMjUybC0wLjIxNSwtMC41NjdjLTAuNDIxLC0xLjExIC0wLjczMiwtMi4yNzUgLTAuOTI0LC0zLjQ2MmwtMC4wOTgsLTAuNTk5bC00LjEzNSwtMS4zNjdjLTAuMDE1LC0wLjMxIC0wLjAyNCwtMC42MjMgLTAuMDI0LC0wLjkzOHMwLjAwOSwtMC42MjggMC4wMjQsLTAuOTM4bDQuMTM1LC0xLjM2N2wwLjA5OCwtMC41OTljMC4xOTIsLTEuMTg4IDAuNTAzLC0yLjM1MyAwLjkyNCwtMy40NjJsMC4yMTUsLTAuNTY3bC0yLjg5OSwtMy4yNTJjMC4yODksLTAuNTUyIDAuNjAxLC0xLjA5MiAwLjkzNiwtMS42MTdsNC4yNDcsMC44ODRsMC4zODQsLTAuNDY5YzAuNzYxLC0wLjkzIDEuNjE5LC0xLjc4NyAyLjU0OSwtMi41NDlsMC40NjksLTAuMzg0bC0wLjg4NCwtNC4yNDhjMC41MjQsLTAuMzMzIDEuMDY0LC0wLjY0NiAxLjYxNiwtMC45MzZsMy4yNTIsMi44OTlsMC41NjcsLTAuMjE0YzEuMTE1LC0wLjQyMiAyLjI4LC0wLjczMyAzLjQ2MiwtMC45MjVsMC41OTksLTAuMDk4bDEuMzY3LC00LjEzNWMwLjYyMiwtMC4wMzEgMS4yNTUsLTAuMDMxIDEuODc3LDBsMS4zNjgsNC4xMzVsMC41OTksMC4wOThjMS4xODMsMC4xOTEgMi4zNDcsMC41MDMgMy40NjIsMC45MjVsMC41NjcsMC4yMTRsMy4yNTMsLTIuODk4YzAuNTQ5LDAuMjg3IDEuMDksMC42MDEgMS42MTYsMC45MzZsLTAuODg0LDQuMjQ3bDAuNDY5LDAuMzg0YzAuOTI5LDAuNzYxIDEuNzg3LDEuNjE4IDIuNTQ4LDIuNTQ5bDAuMzg0LDAuNDdsNC4yNDgsLTAuODg1YzAuMzM0LDAuNTI1IDAuNjQ3LDEuMDY1IDAuOTM2LDEuNjE3bC0yLjg5OSwzLjI1MmwwLjIxNSwwLjU2N2MwLjQyMSwxLjExIDAuNzMyLDIuMjc1IDAuOTI0LDMuNDYybDAuMDk4LDAuNTk5bDQuMTM1LDEuMzY3YzAuMDE0LDAuMzEgMC4wMjMsMC42MjMgMC4wMjMsMC45MzhzLTAuMDA5LDAuNjI4IC0wLjAyNCwwLjkzOHoiLz4KICA8cGF0aCBmaWxsPSIjMDAwMGZmIiBpZD0ic3ZnXzIiIGQ9Im0yNSwxNWMtOC42ODYsMCAtMTUuNTE1LDkuMDE4IC0xNS44MDEsOS40MDJsLTAuNDQ3LDAuNTk4bDAuNDQ2LDAuNTk4YzAuMjg3LDAuMzg0IDcuMTE2LDkuNDAyIDE1LjgwMiw5LjQwMnMxNS41MTUsLTkuMDE4IDE1LjgwMSwtOS40MDJsMC40NDcsLTAuNTk4bC0wLjQ0NiwtMC41OThjLTAuMjg3LC0wLjM4NCAtNy4xMTYsLTkuNDAyIC0xNS44MDIsLTkuNDAyem0wLDE4Yy02LjQ3MSwwIC0xMi4wNzYsLTYuMDQ5IC0xMy43MTUsLThjMS42NCwtMS45NTEgNy4yNDUsLTggMTMuNzE1LC04czEyLjA3Niw2LjA0OSAxMy43MTUsOGMtMS42MzksMS45NTEgLTcuMjQ0LDggLTEzLjcxNSw4eiIvPgogIDxwYXRoIGZpbGw9IiMwMDAwZmYiIGlkPSJzdmdfMyIgZD0ibTI1LDE5Yy0zLjMwOSwwIC02LDIuNjkxIC02LDZzMi42OTEsNiA2LDZzNiwtMi42OTEgNiwtNnMtMi42OTEsLTYgLTYsLTZ6bTAsMTBjLTIuMjA2LDAgLTQsLTEuNzk0IC00LC00czEuNzk0LC00IDQsLTRzNCwxLjc5NCA0LDRzLTEuNzk0LDQgLTQsNHoiLz4KIDwvZz4KPC9zdmc+",
    "parentId": "1jrqyjoabx1a",
    "type": "object"
  },
  {
    "_id": "dqja423wlzrb",
    "docType": "class",
    "title": "Execute",
    "description": "<p>Execute</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiNiZjAwMDAiIGlkPSJzdmdfMSIgZD0ibTE1LjM3NSw3bC01LjM3NSwtNC40NmMtMC4zMDUsLTAuMjUzIC0wLjUzOSwtMC41NCAtMSwtMC41NGMtMC42MjUsMCAtMSwwLjUxNiAtMSwxbDAsM2wtNywwYy0wLjU1LDAgLTEsMC40NSAtMSwxbDAsMmMwLDAuNTUgMC40NSwxIDEsMWw3LDBsMCwzYzAsMC40ODQgMC4zNzUsMSAxLDFjMC40NjEsMCAwLjY5NSwtMC4yODcgMSwtMC41NGw1LjM3NSwtNC40NmMwLjM4MywtMC4zMTIgMC42MjUsLTAuNTU1IDAuNjI1LC0xcy0wLjI0MiwtMC42ODcgLTAuNjI1LC0xeiIvPgogPC9nPgo8L3N2Zz4=",
    "parentId": "1jrqyjoabx1a",
    "properties": {
      "execute": {
        "items": {
          "type": "string"
        },
        "title": "Execute",
        "type": "array",
        "readOnly": true
      }
    },
    "type": "object"
  },
  {
    "_id": "jotxozcetpx2",
    "docType": "class",
    "title": "Delegate",
    "description": "<p>Delegate</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiNmZmU1MDAiIGlkPSJzdmdfMSIgZD0ibTE1LjM3NSw3bC01LjM3NSwtNC40NmMtMC4zMDUsLTAuMjUzIC0wLjUzOSwtMC41NCAtMSwtMC41NGMtMC42MjUsMCAtMSwwLjUxNiAtMSwxbDAsM2wtNywwYy0wLjU1LDAgLTEsMC40NSAtMSwxbDAsMmMwLDAuNTUgMC40NSwxIDEsMWw3LDBsMCwzYzAsMC40ODQgMC4zNzUsMSAxLDFjMC40NjEsMCAwLjY5NSwtMC4yODcgMSwtMC41NGw1LjM3NSwtNC40NmMwLjM4MywtMC4zMTIgMC42MjUsLTAuNTU1IDAuNjI1LC0xcy0wLjI0MiwtMC42ODcgLTAuNjI1LC0xeiIvPgogPC9nPgo8L3N2Zz4=",
    "parentId": "1jrqyjoabx1a",
    "type": "object"
  },
  {
    "_id": "cie1pllxq5mu",
    "docType": "object",
    "name": "Service Request Process",
    "description": "<p>Service Request Process</p>",
    "classId": "dwl1kwhalwj4",
    "agreementClassId": "w3mzeetidb5n",
    "returnActions": [
      "happy",
      "unhappy"
    ],
    "substateId": "oltp4kpj4fvi",
    "ownerId": "bikeshop1111"
  },
  {
    "_id": "h3q1vchxahoh",
    "docType": "object",
    "name": "Bicycle Shop Process",
    "description": "<p>Bicycle Shop Purchase Process</p>",
    "classId": "dwl1kwhalwj4",
    "agreementClassId": "w3mzeetidb5n",
    "returnActions": [
      "happy",
      "unhappy"
    ],
    "substateId": "yefagaab4ua2",
    "ownerId": "bikeshop1111"
  },
  {
    "_id": "ynaxakdc423e",
    "docType": "object",
    "name": "Purchase Process",
    "description": "<p>Purchase</p>",
    "classId": "dwl1kwhalwj4",
    "agreementClassId": "w3mzeetidb5n",
    "returnActions": [
      "happy",
      "unhappy",
      "reject"
    ],
    "substateId": "3r5kgovlor1o",
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "1us2bjzz2i3h",
    "docType": "object",
    "name": "Agreements Table Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "bikeshop1111",
    "tabs": [
      {
        "name": "Agreements Table Tab",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Add Agreement Form",
            "viewId": "idlmhh2i1ass"
          },
          {
            "displayType": "Table",
            "name": "Agreements Table",
            "viewId": "5p3j1unpm2pq"
          }
        ]
      }
    ]
  },
  {
    "_id": "1xiosn5ttuea",
    "docType": "object",
    "name": "OB Resources Tab Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "OB Resources",
        "widgets": [
          {
            "displayType": "Tree",
            "name": "OB Resources",
            "viewId": "vcde5e5rxwpg"
          }
        ]
      }
    ]
  },
  {
    "_id": "24cnex2sayeh",
    "docType": "object",
    "name": "Class Model Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Class Model",
        "widgets": [
          {
            "displayType": "Class Model",
            "name": "Class Model",
            "viewId": "vzhw2vpaflmw"
          }
        ]
      }
    ]
  },
  {
    "_id": "24cnex2saye1",
    "docType": "object",
    "name": "Class Model Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Properties",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Class Home Page",
            "viewId": "5ucwmdby4wox"
          }
        ]
      },
      {
        "name": "Raw",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Class Home Page",
            "viewId": "5ucwmdby4wox"
          }
        ]
      },
    ]
  },
  {
    "_id": "2kjjzqr2i5o5",
    "docType": "object",
    "name": "ACME Bicycle Shop Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "bikeshop1111",
    "tabs": [
      {
        "name": "ACME Bicycle Shop",
        "widgets": [
          {
            "displayType": "HTML Page",
            "name": "What Form"
          }
        ]
      },
      {
        "name": "Shop",
        "pageId": "h5syw45c3qg1"
      },
      {
        "name": "Resources",
        "pageId": "mbatzlqr1qsx"
      }
    ]
  },
  {
    "_id": "2vnljdsieyjw",
    "docType": "object",
    "name": "State Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Process",
        "widgets": [
          {
            "displayType": "Form",
            "name": "State Form",
            "viewId": "wfejmbcgmmpm"
          }
        ]
      },
      {
        "name": "Process Model",
        "widgets": [
          {
            "displayType": "Process Model",
            "name": "Process",
            "viewId": "nqnnj5xfzg4y"
          }
        ]
      }
    ]
  },
  {
    "_id": "44yiclbxugop",
    "docType": "object",
    "name": "Organization Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "What",
        "widgets": [
          {
            "displayType": "HTML Page",
            "name": "What Form"
          }
        ]
      },
      {
        "name": "How",
        "pageId": "4far2aqwurdo"
      },
      {
        "name": "Why",
        "widgets": [
          {
            "displayType": "Document",
            "name": "Why Form"
          }
        ]
      },
      {
        "name": "Resources",
        "pageId": "mbatzlqr1qsx"
      }
    ]
  },
  {
    "_id": "4devwsepaig1",
    "docType": "object",
    "name": "ACME Health Care Clinic Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "bikeshop1111",
    "tabs": [
      {
        "name": "ACME Health Care Clinic ",
        "widgets": [
          {
            "displayType": "HTML Page",
            "name": "What Form"
          }
        ]
      },
      {
        "name": "Make an Appointment",
        "widgets": [
          {
            "displayType": "Table",
            "name": "Why Form"
          }
        ]
      },
      {
        "name": "Resources",
        "pageId": "mbatzlqr1qsx"
      }
    ]
  },
  {
    "_id": "4far2aqwurdo",
    "docType": "object",
    "name": "Document Tab Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Documents",
        "widgets": [
          {
            "displayType": "Tree",
            "name": "Document Tree",
            "viewId": "4r3khpgxgq3i"
          }
        ]
      }
    ]
  },
  {
    "_id": "4lk3hxyyfac3",
    "docType": "object",
    "name": "Standard Model Tree Page",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Class Model",
        "widgets": [
          {
            "displayType": "Tree",
            "name": "Class Model Tree",
            "viewId": "vzhw2vpaflmw"
          }
        ]
      }
    ]
  },
  {
    "_id": "gdfiwgatulea",
    "docType": "object",
    "name": "Page Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Pages",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Page Tab Form",
            "viewId": "2r2creqljk4z"
          }
        ]
      }
    ]
  },
  {
    "_id": "h5syw45c3qg1",
    "docType": "object",
    "name": "Purchase Assest Table Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "bikeshop1111",
    "tabs": [
      {
        "name": "Purchase Assest Form Tab",
        "widgets": [
          {
            "displayType": "Table",
            "name": "Purchase Form",
            "viewId": "d55qg32h5hdr"
          }
        ]
      }
    ]
  },
  {
    "_id": "icfdprzi442m",
    "docType": "object",
    "name": "Page Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Pages",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Page Form",
            "viewId": "mdqg4rkzezxa"
          }
        ]
      }
    ]
  },
  {
    "_id": "kmghbh3qovtq",
    "docType": "object",
    "name": "Navigation Page",
    "accordionOrTab": "Accordions",
    "classId": "pejdgrwd5qso",
    "divider": "Vertical",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Navigation",
        "widgets": [
          {
            "displayType": "Tree",
            "name": "Owners Tree",
            "viewId": "rhyfsqqc1kpr"
          }
        ]
      }
    ]
  },
  {
    "_id": "mbatzlqr1qsx",
    "docType": "object",
    "name": "Resources Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Details",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Details",
            "viewId": "mairnfr3iilv"
          }
        ]
      },
      {
        "name": "Teams",
        "pageId": "kmghbh3qovtq"
      },
      {
        "name": "Off Balance Sheet",
        "pageId": "1xiosn5ttuea"
      },
      {
        "name": "Balance Sheet",
        "widgets": [
          {
            "displayType": "Balance Sheet",
            "name": "Balance Sheet"
          }
        ]
      },
      {
        "name": "Backlog",
        "pageId": "1us2bjzz2i3h"
      }
    ]
  },
  {
    "_id": "n1dvzgi132ap",
    "docType": "object",
    "name": "Agreements Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "States",
        "widgets": [
          {
            "displayType": "Form",
            "name": "State Form",
            "viewId": "ya3cuhahscpv"
          },
          {
            "displayType": "Table",
            "name": "State Form",
            "viewId": "13kxw4cyvpmb"
          }
        ]
      },
      {
        "name": "Details",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Agreements Form",
            "viewId": "t3eamriblic1"
          }
        ]
      },
      {
        "name": "Macro Economic Model",
        "widgets": [
          {
            "displayType": "Macro Economic Model",
            "name": "Workflow"
          }
        ]
      },
      {
        "name": "Process Model",
        "widgets": [
          {
            "displayType": "Process Model",
            "name": "Process Model"
          }
        ]
      }
    ]
  },
  {
    "_id": "nnksb2zyphob",
    "docType": "object",
    "name": "Document Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Documents",
        "widgets": [
          {
            "displayType": "Document",
            "name": "Document Form",
            "viewId": "wh1nnojktarq"
          }
        ]
      }
    ]
  },
  {
    "_id": "qcd1eefe432r",
    "docType": "object",
    "name": "Query Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Query",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Query Form",
            "viewId": "dsae2kl342hk"
          }
        ]
      }
    ]
  },
  {
    "_id": "qwhjia43h1s4",
    "docType": "object",
    "name": "View Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Views",
        "widgets": [
          {
            "displayType": "Form",
            "name": "View Form",
            "viewId": "sudhaobvgvq3"
          }
        ]
      }
    ]
  },
  {
    "_id": "t2grmjaab5fn",
    "docType": "object",
    "name": "Organizational Unit Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Details",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Details",
            "viewId": "mairnfr3iilv"
          }
        ]
      },
      {
        "name": "Docs",
        "pageId": "kmghbh3qovtq"
      },
      {
        "name": "Backlog",
        "pageId": "1us2bjzz2i3h"
      }
    ]
  },
  {
    "_id": "tet4swafvc2k",
    "docType": "object",
    "name": "Purchase Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Purchase",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Purchase Assent Form",
            "viewId": "lhiev54rvf3w"
          }
        ]
      }
    ]
  },
  {
    "_id": "z1wmobr423zh",
    "docType": "object",
    "name": "User Page",
    "accordionOrTab": "Tabs",
    "classId": "pejdgrwd5qso",
    "divider": "None",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Home",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Details",
            "viewId": "mairnfr3iilv"
          }
        ]
      },
      {
        "name": "Album",
        "pageId": "kmghbh3qovtq"
      },
      {
        "name": "Backlog",
        "pageId": "1us2bjzz2i3h"
      }
    ]
  },
  {
    "_id": "z2xnjsqcs5bj",
    "docType": "object",
    "name": "Process Form Page",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Process",
        "widgets": [
          {
            "displayType": "Form",
            "name": "Processes Form",
            "viewId": "qtubgorhvukr"
          }
        ]
      },
      {
        "name": "Process Model",
        "widgets": [
          {
            "displayType": "Process Model",
            "name": "Process",
            "viewId": "nqnnj5xfzg4y"
          }
        ]
      }
    ]
  },
  {
    "_id": "etzkqkeevznx",
    "docType": "object",
    "name": "Macro Economic Model",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Macro Economic Model",
        "widgets": [
          {
            "displayType": "Macro Economic Model",
            "name": "Macro Economic Model",
            "viewId": "nqnnj5xfzg4y"
          }
        ]
      }
    ]
  },
  {
    "_id": "uhekisbbbjh5",
    "docType": "object",
    "name": "Mind Palace",
    "classId": "pejdgrwd5qso",
    "ownerId": "eoscommonsio",
    "tabs": [
      {
        "name": "Mind Palace",
        "widgets": [
          {
            "displayType": "Mind Palace",
            "name": "Mind Palace",
            "viewId": "nqnnj5xfzg4y"
          }
        ]
      }
    ]
  },
  {
    "_id": "13kxw4cyvpmb",
    "docType": "object",
    "name": "Agreements Transaction Table View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "stateDate": {
        "sort": "desc",
        "title": "Date"
      },
      "processId": {},
      "action": {},
      "stateId": {
        "title": "State"
      },
      "description": {}
    },
    "queryId": "eevccbk1napt",
    "baseClassId": "re1ihrfyl3zf",
    "type": "object"
  },
  {
    "_id": "2r2creqljk4z",
    "docType": "object",
    "name": "Page Tab Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "name": {
        "readOnly": false
      },
      "pageId": {
        "readOnly": false
      }
    },
    "baseClassId": "pejdgrwd5qso",
    "type": "object"
  },
  {
    "_id": "3ebxsw5pbk3r",
    "docType": "object",
    "name": "Add an Agreeement",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "baseClassId": "i1gjptcb2skq",
    "properties": {
      "agreementProcessId": {},
      "sellerProcessId": {},
      "name": {
        "readOnly": false,
        "placeholder": "Subject"
      },
      "description": {
        "readOnly": false
      }
    },
    "type": "object"
  },
  {
    "_id": "4r3khpgxgq3i",
    "docType": "object",
    "name": "Documents Tree View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "subQueryIds": "sd5zsuvlxdgf",
    "type": "object"
  },
  {
    "_id": "5p3j1unpm2pq",
    "docType": "object",
    "name": "Agreement Table View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "baseClassId": "i1gjptcb2skq",
    "properties": {
      "startDate": {
        "sort": "desc",
        "title": "Date"
      },
      "state": {
        "title": "State",
        "valueFromMApi": "currentState",
        "query": {},
        "type": "string",
        "readOnly": true
      },
      "name": {}
    },
    "queryId": "vu2j5khcsdrv",
    "type": "object"
  },
  {
    "_id": "5ucwmdby4wox",
    "docType": "object",
    "name": "Standard Model Form View",
    "description": "<p>Descibes home page of the organization</p>",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {
        "readOnly": true,
        "title": "_id",
        "type": "string"
      },
      "title": {
        "placeholder": "Provide a name",
        "maxLength": 1000,
        "minLength": 0,
        "title": "Name",
        "type": "string",
        "readOnly": false
      },
      "description": {
        "placholder": "Add a description",
        "maxLength": 10000,
        "contentMediaType": "text/html",
        "minLength": 0,
        "title": "Description",
        "type": "string",
        "readOnly": false
      },
      "docType": {
        "enum": [
          "class"
        ],
        "title": "Doc Type",
        "type": "string",
        "readOnly": false
      },
      "icon": {
        "maxLength": 2000,
        "media": {
          "binaryEncoding": "base64",
          "type": "image/png"
        },
        "minLength": 0,
        "title": "Icon",
        "type": "string",
        "readOnly": false
      },
      "parentId": {
        "pattern": "[.abcdefghijklmnopqrstuvwxyz12345]{12}",
        "query": {
          "where": [
            {
              "docProp": "classId",
              "operator": "subclasses",
              "value": "gzthjuyjca4s"
            }
          ],
          "sortBy": "title"
        },
        "title": "Super Class",
        "type": "string",
        "readOnly": false
      },
      "properties": {
        "title": "Properties",
        "type": "object",
        "readOnly": false
      },
      "required": {
        "items": {
          "type": "string"
        },
        "title": "Required",
        "type": "array",
        "readOnly": false
      }
    },
    "query": "classes",
    "type": "object"
  },
  {
    "_id": "d55qg32h5hdr",
    "docType": "object",
    "name": "Purchase Table View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "baseClassId": "nlmgc3dmrwxs",
    "properties": {
      "_id": {},
      "name": {},
      "value": {}
    },
    "queryId": "kl2fe4hvhhtg",
    "type": "object"
  },
  {
    "_id": "dsae2kl342hk",
    "docType": "object",
    "name": "Query Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {
        "title": "_id",
        "type": "string"
      },
      "name": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "icon": {
        "readOnly": false
      },
      "pageId": {
        "readOnly": false
      },
      "where": {
        "items": {
          "properties": {
            "docProp": {
              "readOnly": false
            },
            "operator": {
              "readOnly": false
            },
            "value": {
              "readOnly": false
            },
            "valuePath": {
              "readOnly": false
            },
            "mapValue": {
              "readOnly": false
            }
          }
        }
      },
      "subQueryIds": {
        "items": {
          "properties": {
            "queryId": {
              "readOnly": false
            }
          }
        }
      }
    },
    "baseClassId": "q234ooehrk5v",
    "type": "object"
  },
  {
    "_id": "idlmhh2i1ass",
    "docType": "object",
    "name": "Add Service Request Button View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "purchaseButton": {
        "title": "Add Service Request",
        "type": "button",
        "action": "addAgreement",
        "addDialogViewId": "3ebxsw5pbk3r",
        "agreementProcessId": "cie1pllxq5mu"
      }
    },
    "type": "object"
  },
  {
    "_id": "jjeqqtkmf5qo",
    "docType": "object",
    "name": "Send Transaction",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "baseClassId": "re1ihrfyl3zf",
    "properties": {
      "action": {
        "stateActions": true,
        "query": {
          "where": [
            {
              "docProp": "_id",
              "operator": "eq",
              "valuePath": "processStack.0",
              "mapValue": "stateId"
            }
          ],
          "sortBy": "name"
        },
        "title": "Action",
        "type": "string",
        "readOnly": false
      },
      "description": {
        "readOnly": false
      }
    },
    "type": "object"
  },
  {
    "_id": "lhiev54rvf3w",
    "docType": "object",
    "name": "Purchase Asset Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "value": {},
      "purchaseButton": {
        "title": "Buy",
        "type": "button",
        "action": "addAgreement",
        "addDialogViewId": "3ebxsw5pbk3r",
        "processId": "ynaxakdc423e"
      },
      "imageUrl": {},
      "description": {}
    },
    "baseClassId": "nlmgc3dmrwxs",
    "type": "object"
  },
  {
    "_id": "mairnfr3iilv",
    "docType": "object",
    "name": "Account Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {},
      "name": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "how": {
        "readOnly": false
      },
      "why": {
        "readOnly": false
      },
      "exposedToProcessesIds": {
        "readOnly": false
      },
      "pageId": {
        "readOnly": false
      },
      "subParagraphIds": {
        "readOnly": false
      },
      "subUnitIds": {},
      "account_name": {},
      "head_block_num": {},
      "head_block_time": {},
      "privileged": {},
      "last_code_update": {},
      "created": {},
      "ram_quota": {},
      "net_weight": {},
      "cpu_weight": {},
      "net_limit": {},
      "cpu_limit": {},
      "ram_usage": {},
      "permissions": {},
      "total_resources": {},
      "self_delegated_bandwidth": {},
      "refund_request": {},
      "voter_info": {}
    },
    "baseClassId": "pae2bfbrab5n",
    "type": "object"
  },
  {
    "_id": "mdqg4rkzezxa",
    "docType": "object",
    "name": "Page Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {
        "title": "_id",
        "type": "string"
      },
      "accordionOrTab": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "divider": {
        "readOnly": false
      },
      "name": {
        "readOnly": false
      },
      "tabs": {
        "items": {
          "properties": {
            "name": {
              "readOnly": false
            },
            "pageId": {
              "readOnly": false
            },
            "widgets": {
              "items": {
                "properties": {
                  "description": {
                    "readOnly": false
                  },
                  "displayType": {
                    "readOnly": false
                  },
                  "name": {
                    "readOnly": false
                  },
                  "viewId": {
                    "readOnly": false
                  }
                }
              }
            }
          }
        }
      }
    },
    "baseClassId": "pejdgrwd5qso",
    "type": "object"
  },
  {
    "_id": "nqnnj5xfzg4y",
    "docType": "object",
    "name": "Process View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "name": {
        "readOnly": false
      }
    },
    "baseClassId": "dwl1kwhalwj4",
    "type": "object"
  },
  {
    "_id": "qtubgorhvukr",
    "docType": "object",
    "name": "Process Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {},
      "name": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "agreementClassId": {
        "readOnly": false
      },
      "returnActions": {
        "items": {
          "readOnly": false
        }
      },
      "substateId": {
        "readOnly": false
      }
    },
    "baseClassId": "dwl1kwhalwj4",
    "type": "object"
  },
  {
    "_id": "rhyfsqqc1kpr",
    "docType": "object",
    "name": "Owners Class Tree View",
    "description": "<p>Descibes the owner hierarchy, including a children array</p>",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "name": {
        "readOnly": false
      }
    },
    "queryId": "lg2seb3lyals",
    "type": "object"
  },
  {
    "_id": "sudhaobvgvq3",
    "docType": "object",
    "name": "View Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {
        "title": "_id",
        "type": "string"
      },
      "description": {
        "readOnly": false
      },
      "name": {
        "readOnly": false
      },
      "subQueryIds": {
        "readOnly": false
      },
      "baseClassId": {
        "readOnly": false
      },
      "required": {
        "readOnly": false
      },
      "properties": {
        "readOnly": false
      }
    },
    "baseClassId": "pylvseoljret",
    "type": "object"
  },
  {
    "_id": "t3eamriblic1",
    "docType": "object",
    "name": "Agreement Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {},
      "name": {},
      "classification": {},
      "description": {
        "title": "Recardian Contract"
      },
      "startDate": {},
      "expirationDate": {},
      "agreementProcessId": {},
      "assetId": {},
      "amount": {},
      "currency": {},
      "buyerId": {},
      "sellerId": {},
      "processStack": {},
      "sellerProcessId": {},
      "sellerEpicId": {},
      "agreementHistoryIds": {
        "items": {
          "properties": {
            "agreementHistoryId": {
              "readOnly": false
            }
          }
        }
      }
    },
    "baseClassId": "i1gjptcb2skq",
    "type": "object"
  },
  {
    "_id": "vcde5e5rxwpg",
    "docType": "object",
    "name": "EC Resources Tree View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "queryId": "znn3osz1igvm",
    "type": "object"
  },
  {
    "_id": "vzhw2vpaflmw",
    "docType": "object",
    "name": "Class Model Tree View",
    "description": "<p>Descibes the class model hierarchy, including a children array</p>",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {
        "readOnly": true,
        "title": "_id",
        "type": "string"
      },
      "name": {
        "placeholder": "Provide a name",
        "maxLength": 100000,
        "title": "Name",
        "type": "string",
        "readOnly": false
      },
      "description": {
        "placholder": "Add a description",
        "maxLength": 100000,
        "contentMediaType": "text/html",
        "title": "Description",
        "type": "string",
        "readOnly": false
      },
      "docType": {
        "enum": [
          "object"
        ],
        "title": "Doument Type",
        "type": "string",
        "readOnly": true
      },
      "icon": {
        "title": "Icon",
        "type": "string",
        "readOnly": false
      }
    },
    "queryId": "tllcmvjazmz2",
    "type": "object"
  },
  {
    "_id": "wfejmbcgmmpm",
    "docType": "object",
    "name": "State Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "_id": {},
      "name": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "nextStateIds": {
        "items": {
          "properties": {
            "action": {
              "readOnly": false
            },
            "stateId": {
              "readOnly": false
            }
          }
        }
      },
      "substateId": {
        "readOnly": false
      },
      "execute": {
        "readOnly": false
      }
    },
    "baseClassId": "dlpwvptczyeb",
    "type": "object"
  },
  {
    "_id": "wh1nnojktarq",
    "docType": "object",
    "name": "Document Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "name": {
        "readOnly": false
      },
      "description": {
        "readOnly": false
      },
      "subParagraphIds": {
        "items": {
          "properties": {
            "documentId": {
              "readOnly": false
            }
          }
        }
      }
    },
    "baseClassId": "siutzqsj5dgc",
    "type": "object"
  },
  {
    "_id": "ya3cuhahscpv",
    "docType": "object",
    "name": "Agreement State Form View",
    "classId": "pylvseoljret",
    "ownerId": "eoscommonsio",
    "properties": {
      "buyerId": {
        "title": "From"
      },
      "name": {},
      "state": {
        "title": "State",
        "valueFromMApi": "currentState",
        "query": {},
        "type": "string",
        "readOnly": true
      },
      "aurhorizedUsers": {
        "valueFromMApi": "getAuthorizedAccounts",
        "items": {
          "title": "Authorized User",
          "type": "string"
        },
        "title": "Authorized Users",
        "type": "array",
        "readOnly": true
      },
      "addButton": {
        "title": "Bump State",
        "type": "button",
        "action": "sendTransaction",
        "addDialogViewId": "jjeqqtkmf5qo"
      }
    },
    "baseClassId": "i1gjptcb2skq",
    "type": "object"
  },
  {
    "_id": "2jfs4is4icct",
    "docType": "object",
    "name": "Subclasses Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLjI1MzgwMzMsLTEuMTY5MzA0MiwtMzM4LjE0NDA5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6Izg5MDRiMSIKICAgICAgIGQ9Im0gMTMuMTY5MzA0LDI3NC4wNTA5OSAxMSwzIHYgMyBsIC0xMSw0IC0xMC45OTk5OTk4LC00IDEwZS04LC0zIHoiLz4KICA8L2c+Cjwvc3ZnPgoK",
    "subQueryIds": [
      "2jfs4is4icct",
      "x1lrv2xdq2tu"
    ],
    "pageId": "4cnex2saye1",
    "mongoQuery": {
      "selector": { "parentId": "$fk" },
      "fields": ["_id", "title"],
      "sort": ["title"]
    }
  },
  {
    "_id": "2vwvbhvflpp1",
    "docType": "object",
    "name": "Document Sub Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAADxSURBVDhPY/j//z9FmLrgzEyT/yB8eobx/5PTDP+fmGpAvBUgjahgFxgf6tcibAhI8+3thUAchAUX/t/bpfp/V7vS/+0t8v+3Nsn+39wo/X9DnQTCYJCTSQVrqkQQBoD8+///TCCeQySe+X95KT/CgONT9MGCpODFhdwIA45O0oVI/JhMHAaqXZDHgTAAFNJgA953EoeBauflsCEMONCrATHgST1xGKh2ThYLwgBQNIENuF1KHAaqnZXBhDAAFMdgA67kE4eBamemMyIMAAHkBLKuRuz/6krh/yvKBP4vLeYFhzgo0ED+BjkdQ/MAAgYGAKPFDB0e1bt2AAAAAElFTkSuQmCC",
    "subQueryIds": [
      "2vwvbhvflpp1"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "subParagraphIds"
      }
    ]
  },
  {
    "_id": "4gnvq2ctvtiw",
    "docType": "object",
    "name": "Account Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "mongoQuery": {
      "selector": { "classId": "$fk" },
      "fields": ["_id", "name"],
      "sort": ["name"]
    }
  },
  {
    "_id": "5fcag1lt11gj",
    "docType": "object",
    "name": "Sub State Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "pageId": "2vnljdsieyjw",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAADxSURBVDhPY/j//z9FmLrgzEyT/yB8eobx/5PTDP+fmGpAvBUgjahgFxgf6tcibAhI8+3thUAchAUX/t/bpfp/V7vS/+0t8v+3Nsn+39wo/X9DnQTCYJCTSQVrqkQQBoD8+///TCCeQySe+X95KT/CgONT9MGCpODFhdwIA45O0oVI/JhMHAaqXZDHgTAAFNJgA953EoeBauflsCEMONCrATHgST1xGKh2ThYLwgBQNIENuF1KHAaqnZXBhDAAFMdgA67kE4eBamemMyIMAAHkBLKuRuz/6krh/yvKBP4vLeYFhzgo0ED+BjkdQ/MAAgYGAKPFDB0e1bt2AAAAAElFTkSuQmCC",
    "subQueryIds": [
      "5fcag1lt11gj",
      "ydwhxijs4nrw"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "substateId"
      }
    ]
  },
  {
    "_id": "eevccbk1napt",
    "docType": "object",
    "name": "Agreements History Table Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "agreementHistoryIds"
      }
    ]
  },
  {
    "_id": "itypb41mkq2v",
    "docType": "object",
    "name": "Queries Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "pageId": "qcd1eefe432r",
    "subQueryIds": [
      "itypb41mkq2v"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "subQueryIds"
      }
    ],
    "sortBy": "name"
  },
  {
    "_id": "jla5kldghbxi",
    "docType": "object",
    "name": "Authorized for State Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "authorizedForStateIds"
      }
    ]
  },
  {
    "_id": "kl2fe4hvhhtg",
    "docType": "object",
    "name": "Assests Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "pageId": "tet4swafvc2k",
    "mongoQuery": {
      "selector": { "classId": "nlmgc3dmrwxs" },
      "fields": ["_id", "name"],
      "sort": ["name"]
    }
  },
  {
    "_id": "lg2seb3lyals",
    "docType": "object",
    "name": "Accounts Class Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHZpZXdCb3g9IjAgMCA3MDAgNzAwIgogICB3aWR0aD0iNzAwIgogICBoZWlnaHQ9IjcwMCI+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS41OTMyMiw5NC45MTUyNTQpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDYxMC41LDM0MS4zIGMgMi42LC0xNC4xIDIuNiwtMjguNSAwLC00Mi42IGwgMjUuOCwtMTQuOSBjIDMsLTEuNyA0LjMsLTUuMiAzLjMsLTguNSAtNi43LC0yMS42IC0xOC4yLC00MS4yIC0zMy4yLC01Ny40IC0yLjMsLTIuNSAtNiwtMy4xIC05LC0xLjQgbCAtMjUuOCwxNC45IGMgLTEwLjksLTkuMyAtMjMuNCwtMTYuNSAtMzYuOSwtMjEuMyB2IC0yOS44IGMgMCwtMy40IC0yLjQsLTYuNCAtNS43LC03LjEgLTIyLjMsLTUgLTQ1LC00LjggLTY2LjIsMCAtMy4zLDAuNyAtNS43LDMuNyAtNS43LDcuMSB2IDI5LjggYyAtMTMuNSw0LjggLTI2LDEyIC0zNi45LDIxLjMgbCAtMjUuOCwtMTQuOSBjIC0yLjksLTEuNyAtNi43LC0xLjEgLTksMS40IC0xNSwxNi4yIC0yNi41LDM1LjggLTMzLjIsNTcuNCAtMSwzLjMgMC40LDYuOCAzLjMsOC41IGwgMjUuOCwxNC45IGMgLTIuNiwxNC4xIC0yLjYsMjguNSAwLDQyLjYgbCAtMjUuOCwxNC45IGMgLTMsMS43IC00LjMsNS4yIC0zLjMsOC41IDYuNywyMS42IDE4LjIsNDEuMSAzMy4yLDU3LjQgMi4zLDIuNSA2LDMuMSA5LDEuNCBsIDI1LjgsLTE0LjkgYyAxMC45LDkuMyAyMy40LDE2LjUgMzYuOSwyMS4zIHYgMjkuOCBjIDAsMy40IDIuNCw2LjQgNS43LDcuMSAyMi4zLDUgNDUsNC44IDY2LjIsMCAzLjMsLTAuNyA1LjcsLTMuNyA1LjcsLTcuMSB2IC0yOS44IGMgMTMuNSwtNC44IDI2LC0xMiAzNi45LC0yMS4zIGwgMjUuOCwxNC45IGMgMi45LDEuNyA2LjcsMS4xIDksLTEuNCAxNSwtMTYuMiAyNi41LC0zNS44IDMzLjIsLTU3LjQgMSwtMy4zIC0wLjQsLTYuOCAtMy4zLC04LjUgeiBNIDQ5NiwzNjguNSBjIC0yNi44LDAgLTQ4LjUsLTIxLjggLTQ4LjUsLTQ4LjUgMCwtMjYuNyAyMS44LC00OC41IDQ4LjUsLTQ4LjUgMjYuNywwIDQ4LjUsMjEuOCA0OC41LDQ4LjUgMCwyNi43IC0yMS43LDQ4LjUgLTQ4LjUsNDguNSB6IE0gOTYsMjI0IGMgMzUuMywwIDY0LC0yOC43IDY0LC02NCAwLC0zNS4zIC0yOC43LC02NCAtNjQsLTY0IC0zNS4zLDAgLTY0LDI4LjcgLTY0LDY0IDAsMzUuMyAyOC43LDY0IDY0LDY0IHogbSAyMjQsMzIgYyAxLjksMCAzLjcsLTAuNSA1LjYsLTAuNiA4LjMsLTIxLjcgMjAuNSwtNDIuMSAzNi4zLC01OS4yIDcuNCwtOCAxNy45LC0xMi42IDI4LjksLTEyLjYgNi45LDAgMTMuNywxLjggMTkuNiw1LjMgbCA3LjksNC42IGMgMC44LC0wLjUgMS42LC0wLjkgMi40LC0xLjQgNywtMTQuNiAxMS4yLC0zMC44IDExLjIsLTQ4IDAsLTYxLjkgLTUwLjEsLTExMiAtMTEyLC0xMTIgQyAyNTgsMzIuMSAyMDgsODIuMSAyMDgsMTQ0IGMgMCw2MS45IDUwLjEsMTEyIDExMiwxMTIgeiBtIDEwNS4yLDE5NC41IGMgLTIuMywtMS4yIC00LjYsLTIuNiAtNi44LC0zLjkgLTguMiw0LjggLTE1LjMsOS44IC0yNy41LDkuOCAtMTAuOSwwIC0yMS40LC00LjYgLTI4LjksLTEyLjYgLTE4LjMsLTE5LjggLTMyLjMsLTQzLjkgLTQwLjIsLTY5LjYgLTEwLjcsLTM0LjUgMjQuOSwtNDkuNyAyNS44LC01MC4zIC0wLjEsLTIuNiAtMC4xLC01LjIgMCwtNy44IGwgLTcuOSwtNC42IGMgLTMuOCwtMi4yIC03LC01IC05LjgsLTguMSAtMy4zLDAuMiAtNi41LDAuNiAtOS44LDAuNiAtMjQuNiwwIC00Ny42LC02IC02OC41LC0xNiBoIC04LjMgQyAxNzkuNiwyODggMTI4LDMzOS42IDEyOCw0MDMuMiBWIDQzMiBjIDAsMjYuNSAyMS41LDQ4IDQ4LDQ4IGggMjU1LjQgYyAtMy43LC02IC02LjIsLTEyLjggLTYuMiwtMjAuMyB6IE0gMTczLjEsMjc0LjYgQyAxNjEuNSwyNjMuMSAxNDUuNiwyNTYgMTI4LDI1NiBIIDY0IEMgMjguNywyNTYgMCwyODQuNyAwLDMyMCB2IDMyIGMgMCwxNy43IDE0LjMsMzIgMzIsMzIgaCA2NS45IGMgNi4zLC00Ny40IDM0LjksLTg3LjMgNzUuMiwtMTA5LjQgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwZmYiLz4KICA8L2c+Cjwvc3ZnPgoK",
    "pageId": "qwhjia43h1s4",
    "subQueryIds": [
      "mhi13xo2io4q"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "value": "ikjyhlqewxs3"
      }
    ]
  },
  {
    "_id": "mhi13xo2io4q",
    "docType": "object",
    "name": "Accounts Subclasses Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHZpZXdCb3g9IjAgMCA3MDAgNzAwIgogICB3aWR0aD0iNzAwIgogICBoZWlnaHQ9IjcwMCI+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS41OTMyMiw5NC45MTUyNTQpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDYxMC41LDM0MS4zIGMgMi42LC0xNC4xIDIuNiwtMjguNSAwLC00Mi42IGwgMjUuOCwtMTQuOSBjIDMsLTEuNyA0LjMsLTUuMiAzLjMsLTguNSAtNi43LC0yMS42IC0xOC4yLC00MS4yIC0zMy4yLC01Ny40IC0yLjMsLTIuNSAtNiwtMy4xIC05LC0xLjQgbCAtMjUuOCwxNC45IGMgLTEwLjksLTkuMyAtMjMuNCwtMTYuNSAtMzYuOSwtMjEuMyB2IC0yOS44IGMgMCwtMy40IC0yLjQsLTYuNCAtNS43LC03LjEgLTIyLjMsLTUgLTQ1LC00LjggLTY2LjIsMCAtMy4zLDAuNyAtNS43LDMuNyAtNS43LDcuMSB2IDI5LjggYyAtMTMuNSw0LjggLTI2LDEyIC0zNi45LDIxLjMgbCAtMjUuOCwtMTQuOSBjIC0yLjksLTEuNyAtNi43LC0xLjEgLTksMS40IC0xNSwxNi4yIC0yNi41LDM1LjggLTMzLjIsNTcuNCAtMSwzLjMgMC40LDYuOCAzLjMsOC41IGwgMjUuOCwxNC45IGMgLTIuNiwxNC4xIC0yLjYsMjguNSAwLDQyLjYgbCAtMjUuOCwxNC45IGMgLTMsMS43IC00LjMsNS4yIC0zLjMsOC41IDYuNywyMS42IDE4LjIsNDEuMSAzMy4yLDU3LjQgMi4zLDIuNSA2LDMuMSA5LDEuNCBsIDI1LjgsLTE0LjkgYyAxMC45LDkuMyAyMy40LDE2LjUgMzYuOSwyMS4zIHYgMjkuOCBjIDAsMy40IDIuNCw2LjQgNS43LDcuMSAyMi4zLDUgNDUsNC44IDY2LjIsMCAzLjMsLTAuNyA1LjcsLTMuNyA1LjcsLTcuMSB2IC0yOS44IGMgMTMuNSwtNC44IDI2LC0xMiAzNi45LC0yMS4zIGwgMjUuOCwxNC45IGMgMi45LDEuNyA2LjcsMS4xIDksLTEuNCAxNSwtMTYuMiAyNi41LC0zNS44IDMzLjIsLTU3LjQgMSwtMy4zIC0wLjQsLTYuOCAtMy4zLC04LjUgeiBNIDQ5NiwzNjguNSBjIC0yNi44LDAgLTQ4LjUsLTIxLjggLTQ4LjUsLTQ4LjUgMCwtMjYuNyAyMS44LC00OC41IDQ4LjUsLTQ4LjUgMjYuNywwIDQ4LjUsMjEuOCA0OC41LDQ4LjUgMCwyNi43IC0yMS43LDQ4LjUgLTQ4LjUsNDguNSB6IE0gOTYsMjI0IGMgMzUuMywwIDY0LC0yOC43IDY0LC02NCAwLC0zNS4zIC0yOC43LC02NCAtNjQsLTY0IC0zNS4zLDAgLTY0LDI4LjcgLTY0LDY0IDAsMzUuMyAyOC43LDY0IDY0LDY0IHogbSAyMjQsMzIgYyAxLjksMCAzLjcsLTAuNSA1LjYsLTAuNiA4LjMsLTIxLjcgMjAuNSwtNDIuMSAzNi4zLC01OS4yIDcuNCwtOCAxNy45LC0xMi42IDI4LjksLTEyLjYgNi45LDAgMTMuNywxLjggMTkuNiw1LjMgbCA3LjksNC42IGMgMC44LC0wLjUgMS42LC0wLjkgMi40LC0xLjQgNywtMTQuNiAxMS4yLC0zMC44IDExLjIsLTQ4IDAsLTYxLjkgLTUwLjEsLTExMiAtMTEyLC0xMTIgQyAyNTgsMzIuMSAyMDgsODIuMSAyMDgsMTQ0IGMgMCw2MS45IDUwLjEsMTEyIDExMiwxMTIgeiBtIDEwNS4yLDE5NC41IGMgLTIuMywtMS4yIC00LjYsLTIuNiAtNi44LC0zLjkgLTguMiw0LjggLTE1LjMsOS44IC0yNy41LDkuOCAtMTAuOSwwIC0yMS40LC00LjYgLTI4LjksLTEyLjYgLTE4LjMsLTE5LjggLTMyLjMsLTQzLjkgLTQwLjIsLTY5LjYgLTEwLjcsLTM0LjUgMjQuOSwtNDkuNyAyNS44LC01MC4zIC0wLjEsLTIuNiAtMC4xLC01LjIgMCwtNy44IGwgLTcuOSwtNC42IGMgLTMuOCwtMi4yIC03LC01IC05LjgsLTguMSAtMy4zLDAuMiAtNi41LDAuNiAtOS44LDAuNiAtMjQuNiwwIC00Ny42LC02IC02OC41LC0xNiBoIC04LjMgQyAxNzkuNiwyODggMTI4LDMzOS42IDEyOCw0MDMuMiBWIDQzMiBjIDAsMjYuNSAyMS41LDQ4IDQ4LDQ4IGggMjU1LjQgYyAtMy43LC02IC02LjIsLTEyLjggLTYuMiwtMjAuMyB6IE0gMTczLjEsMjc0LjYgQyAxNjEuNSwyNjMuMSAxNDUuNiwyNTYgMTI4LDI1NiBIIDY0IEMgMjguNywyNTYgMCwyODQuNyAwLDMyMCB2IDMyIGMgMCwxNy43IDE0LjMsMzIgMzIsMzIgaCA2NS45IGMgNi4zLC00Ny40IDM0LjksLTg3LjMgNzUuMiwtMTA5LjQgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwZmYiLz4KICA8L2c+Cjwvc3ZnPgoK",
    "subQueryIds": [
      "mhi13xo2io4q",
      "4gnvq2ctvtiw"
    ],
    "pageId": "4cnex2saye1",
    "mongoQuery": {
      "selector": { "parentId": "$fk" },
      "fields": ["_id", "title"],
      "sort": ["title"]
    }
  },
  {
    "_id": "ndpfqsf454tl",
    "docType": "object",
    "name": "Organizational Units Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "subQueryIds": [
      "jla5kldghbxi"
    ],
    "where": [
      {
        "docProp": "classId",
        "operator": "get_controlled_accounts",
        "value": "$fk"
      }
    ],
    "sortBy": "name"
  },
  {
    "_id": "sd5zsuvlxdgf",
    "docType": "object",
    "name": "Document Root Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUuMDAwMDAwMDAwMDAwMDAyIiBoZWlnaHQ9IjE1LjAwMDAwMDAwMDAwMDAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQwMiIgd2lkdGg9IjU4MiIgeT0iLTEiIHg9Ii0xIi8+CiA8L2c+CiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHBhdGggZmlsbD0iI2NjY2NjYyIgaWQ9InN2Z18xIiBkPSJtNy41LDRjLTEuOTMsMCAtMy41LDEuNTcgLTMuNSwzLjVzMS41NywzLjUgMy41LDMuNXMzLjUsLTEuNTcgMy41LC0zLjVzLTEuNTcsLTMuNSAtMy41LC0zLjV6bTAsNmMtMS4zNzgsMCAtMi41LC0xLjEyMiAtMi41LC0yLjVzMS4xMjIsLTIuNSAyLjUsLTIuNXMyLjUsMS4xMjIgMi41LDIuNXMtMS4xMjIsMi41IC0yLjUsMi41eiIvPgogIDxwYXRoIGZpbGw9IiNjY2NjY2MiIGlkPSJzdmdfMiIgZD0ibTE1LDlsMCwtM2wtMi4yMDgsMGMtMC4xMTcsLTAuNDA5IC0wLjI4MSwtMC44MDMgLTAuNDkyLC0xLjE3OWwxLjU2MywtMS41NjRsLTIuMTIxLC0yLjEyMWwtMS41NjMsMS41NjRjLTAuMzc2LC0wLjIxMSAtMC43NywtMC4zNzUgLTEuMTc5LC0wLjQ5MmwwLC0yLjIwOGwtMywwbDAsMi4yMDhjLTAuNDA5LDAuMTE3IC0wLjgwMywwLjI4MSAtMS4xNzksMC40OTJsLTEuNTY0LC0xLjU2NGwtMi4xMjEsMi4xMjFsMS41NjQsMS41NjRjLTAuMjExLDAuMzc2IC0wLjM3NSwwLjc3IC0wLjQ5MiwxLjE3OWwtMi4yMDgsMGwwLDNsMi4yMDgsMGMwLjExNywwLjQwOSAwLjI4MSwwLjgwMyAwLjQ5MiwxLjE3OWwtMS41NjMsMS41NjRsMi4xMjEsMi4xMjFsMS41NjMsLTEuNTY0YzAuMzc1LDAuMjExIDAuNzcsMC4zNzUgMS4xNzksMC40OTJsMCwyLjIwOGwzLDBsMCwtMi4yMDhjMC40MDksLTAuMTE3IDAuODAzLC0wLjI4MSAxLjE3OSwtMC40OTJsMS41NjQsMS41NjNsMi4xMjEsLTIuMTIxbC0xLjU2NCwtMS41NjNjMC4yMTEsLTAuMzc1IDAuMzc1LC0wLjc3IDAuNDkyLC0xLjE3OWwyLjIwOCwwem0tMi41NSwyLjc0M2wtMC43MDcsMC43MDdsLTEuNDIzLC0xLjQyM2wtMC4zNDEsMC4yMjVjLTAuNDg5LDAuMzIyIC0xLjAyLDAuNTQ0IC0xLjU3OSwwLjY1OGwtMC40LDAuMDgxbDAsMi4wMDlsLTEsMGwwLC0yLjAwOWwtMC40LC0wLjA4MWMtMC41NTksLTAuMTE0IC0xLjA5LC0wLjMzNSAtMS41NzgsLTAuNjU4bC0wLjM0MSwtMC4yMjVsLTEuNDI0LDEuNDIzbC0wLjcwNywtMC43MDdsMS40MjMsLTEuNDIzbC0wLjIyNCwtMC4zNDFjLTAuMzIzLC0wLjQ4OSAtMC41NDUsLTEuMDIgLTAuNjU5LC0xLjU3OWwtMC4wODEsLTAuNGwtMi4wMDksMGwwLC0xbDIuMDA5LDBsMC4wODEsLTAuNGMwLjExNCwtMC41NTkgMC4zMzUsLTEuMDkgMC42NTgsLTEuNTc4bDAuMjI1LC0wLjM0MWwtMS40MjMsLTEuNDI0bDAuNzA3LC0wLjcwN2wxLjQyMywxLjQyM2wwLjM0MSwtMC4yMjVjMC40ODksLTAuMzIyIDEuMDIsLTAuNTQ0IDEuNTc5LC0wLjY1OGwwLjQsLTAuMDgxbDAsLTIuMDA5bDEsMGwwLDIuMDA5bDAuNCwwLjA4MWMwLjU1OSwwLjExNCAxLjA5LDAuMzM1IDEuNTc4LDAuNjU4bDAuMzQxLDAuMjI1bDEuNDIzLC0xLjQyM2wwLjcwNywwLjcwN2wtMS40MjMsMS40MjNsMC4yMjUsMC4zNDFjMC4zMjMsMC40ODkgMC41NDUsMS4wMiAwLjY1OSwxLjU3OWwwLjA4MSwwLjRsMi4wMDksMGwwLDFsLTIuMDA5LDBsLTAuMDgxLDAuNGMtMC4xMTQsMC41NTkgLTAuMzM1LDEuMDkgLTAuNjU4LDEuNTc4bC0wLjIyNSwwLjM0MWwxLjQyMywxLjQyNHoiLz4KIDwvZz4KPC9zdmc+",
    "subQueryIds": [
      "2vwvbhvflpp1"
    ],
    "mongoQuery": {
      "selector": { "_id": "xqxkmto5njxi" },
      "fields": ["_id", "name", "description"]
    }
  },
  {
    "_id": "tllcmvjazmz2",
    "docType": "object",
    "name": "Root Class Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLjI1MzgwMzMsLTEuMTY5MzA0MiwtMzM4LjE0NDA5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6Izg5MDRiMSIKICAgICAgIGQ9Im0gMTMuMTY5MzA0LDI3NC4wNTA5OSAxMSwzIHYgMyBsIC0xMSw0IC0xMC45OTk5OTk4LC00IDEwZS04LC0zIHoiLz4KICA8L2c+Cjwvc3ZnPgoK",
    "subQueryIds": [
      "2jfs4is4icct",
      "x1lrv2xdq2tu"
    ],
    "pageId": "4cnex2saye1",
    "mongoQuery": {
      "selector": { "_id": "gzthjuyjca4s" },
      "fields": ["_id", "title"]
    }
  },
  {
    "_id": "vu2j5khcsdrv",
    "docType": "object",
    "name": "Agreements Table Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "pageId": "n1dvzgi132ap",
    "where": [
      {
        "docProp": "classId",
        "operator": "instances",
        "value": "i1gjptcb2skq"
      },
      {
        "docProp": "sellerId",
        "operator": "eq",
        "value": "$fk"
      }
    ]
  },
  {
    "_id": "wxqc53yr1d2f",
    "docType": "object",
    "name": "Exposed to Processes Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "exposedToProcessesIds"
      }
    ]
  },
  {
    "_id": "x1lrv2xdq2tu",
    "docType": "object",
    "name": "Object Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHdpZHRoPSIyNCIKICAgaGVpZ2h0PSIyNCIKICAgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNjkzMDQyLC0yNjYuMDUwOTkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDBBMzAwIgogICAgICAgZD0ibSAxMy4xNjkzMDQsMjcyLjA0MjA2IDExLDUuNDE4NDEgdiA1LjQxODM5IEggMi4xNjkzMDQyIGwgMTBlLTgsLTUuNDE4MzkgeiIvPgogIDwvZz4KPC9zdmc+Cg==",
    "mongoQuery": {
      "selector": { "classId": "$fk" },
      "fields": ["_id", "name"],
      "sort": ["name"]
    }
  },
  {
    "_id": "ydwhxijs4nrw",
    "docType": "object",
    "name": "Next States Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "pageId": "2vnljdsieyjw",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAADxSURBVDhPY/j//z9FmLrgzEyT/yB8eobx/5PTDP+fmGpAvBUgjahgFxgf6tcibAhI8+3thUAchAUX/t/bpfp/V7vS/+0t8v+3Nsn+39wo/X9DnQTCYJCTSQVrqkQQBoD8+///TCCeQySe+X95KT/CgONT9MGCpODFhdwIA45O0oVI/JhMHAaqXZDHgTAAFNJgA953EoeBauflsCEMONCrATHgST1xGKh2ThYLwgBQNIENuF1KHAaqnZXBhDAAFMdgA67kE4eBamemMyIMAAHkBLKuRuz/6krh/yvKBP4vLeYFhzgo0ED+BjkdQ/MAAgYGAKPFDB0e1bt2AAAAAElFTkSuQmCC",
    "subQueryIds": [
      "ydwhxijs4nrw"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "valuePath": "nextStateIds",
        "mapValue": "stateId"
      }
    ]
  },
  {
    "_id": "znn3osz1igvm",
    "docType": "object",
    "name": "OB Resources Class Query",
    "classId": "q234ooehrk5v",
    "ownerId": "eoscommonsio",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAABTSURBVDhPYxjm4D/Dnf8gDOUSD2AaNzH8B2OiDULXiI5xGkRIIzpGMYgUjegYxRBSDIKpB2tGBoQMwqkRHaAbRLRGdEC2RvoCkA8pwVgFicf/GQD/KjucAgshDwAAAABJRU5ErkJggg==",
    "pageId": "qwhjia43h1s4",
    "subQueryIds": [
      "2jfs4is4icct",
      "x1lrv2xdq2tu"
    ],
    "where": [
      {
        "docProp": "_id",
        "operator": "in",
        "value": "nrioirgelhpi"
      }
    ]
  },
  {
    "_id": "jc2dv1u5rcp5",
    "docType": "object",
    "name": "Achitecture",
    "description": "<p>Our achitecture is centered arround</p>",
    "classId": "siutzqsj5dgc",
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "rewk2w4kvavm",
    "docType": "object",
    "name": "Design",
    "description": "<div><p>These are some of the _id design features</p><p><strong>Object Oriented</strong></p><p>Eos-commons is centered around a data store. The store holds a class model and a bunch of instantiations of these classes, a.k.a. objects. The classes form a hierarchy, where classes lower on the tree, inherit all the properties of their ancestor classes. Objects always point to a class through a 'classId'. Objects must comply with the properties defined in their respective classes.</p><p><strong>Extensible</strong></p><p>The class model is fully extensible meaning, developers can add and use their own classes, without interfering with existing class model.</p><p><strong>JSON Schema</strong></p><p>Our classes take the form of JSON Schema. That means you can, at any time, validate an object against it&rsquo;s schema, using a standard JSON schema validator.</p><p><strong>Frontend</strong></p><p>The frontend is developed in vuetify.js. The vuetify app 'knows' how to interpret data in the store, in order to generate layout, pages, tabs, widgets etc. These in turn, allowed the user to view and modify data.</p><p><strong>Naivgate the Data Graph</strong></p><p>The combination layout, pages, tabs etc. allow the user to drill down through the data graph, in a master - detail fashion, which can go on indefintity. Eos-commons elables developers to create sophisicated apps which maintain relational and data intgrity, based on rules lay down in the class model.</p><p><strong>Generated Forms</strong></p><p>Forms are generated from Views. Views similar to SQL views in that they referece a class, and properties of that class. The view properties determin wich type of editor is used: sting, number, html, date etc. If the property type is 'object' or 'array', sub-forms are generated accordingly.</p><p><strong>Pages</strong></p><p>Pages have one or more tabs. With one tab, no tabbar is displayed. A tab can have a widget: Form, Document, Process Model, Balance Sheet etc. Or it can reference another page. Pages can have splitter, in which case the right side serves as a slave to the right side. Click on a treenode or table row on the left, then it's details are displayed on the right (master detail paterm)</p><p><strong>DYI</strong></p><p>Users are invited to create their own pages and resuse (sub-)pages created by others.</p><p><strong>Routing</strong></p><p>The hash in the url represents the page state. You can easly create a link that points to your home page or an organization</p><p><strong>3D</strong></p><p>We love 3D. 3D views allow you to get upclose and personal with your data. Asof writing we have</p><ul><li>Class Model</li><li>Process Model</li><li>Macro Economic Model</li></ul><p>We would like to venture in to things like Tree of Life, Earth Epocs logatithic timeline, Dynamic political history map, Macro economics and so on. We're eager to see what others come up with.</p><p><strong>Death to 3GL</strong></p><p>No coding involved.</p></div>",
    "classId": "siutzqsj5dgc",
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "xqxkmto5njxi",
    "docType": "object",
    "name": "Eos Commons Docs",
    "description": "",
    "classId": "siutzqsj5dgc",
    "ownerId": "eoscommonsio",
    "subParagraphIds": [
      "jc2dv1u5rcp5",
      "rewk2w4kvavm"
    ]
  },
  {
    "_id": "44y5au13dck2",
    "docType": "class",
    "title": "Taxes Payable",
    "description": "<p>Taxes Payable owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "fk1smvoky3xg",
    "docType": "class",
    "title": "Accounts Payable",
    "description": "<p>Accounts Payable owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "htl3fqiec35p",
    "docType": "class",
    "title": "Wages Payable",
    "description": "<p>Wages Payable owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "i5nl5d1sqfta",
    "docType": "class",
    "title": "Waranty Liability",
    "description": "<p>Waranty Liability owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "jxduzc4ntt5a",
    "docType": "class",
    "title": "Notes Payable",
    "description": "<p>Notes Payable owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "ng4q2edt4hxu",
    "docType": "class",
    "title": "Intrest Payable",
    "description": "<p>Intrest Payable owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "reywu3lshttg",
    "docType": "class",
    "title": "Unearned Revenues",
    "description": "<p>Unearned Revenues owned by users/organizations</p>",
    "parentId": "yiajzp3bwqsc",
    "type": "object"
  },
  {
    "_id": "wjowivkwwidy",
    "docType": "class",
    "title": "Bonds Payable",
    "description": "<p>Bonds Payable owned by users/organizations</p>",
    "parentId": "thrjrlfgcjrt",
    "type": "object"
  },
  {
    "_id": "wza5ek5naftn",
    "docType": "class",
    "title": "Notes Payable",
    "description": "<p>Notes Payable owned by users/organizations</p>",
    "parentId": "thrjrlfgcjrt",
    "type": "object"
  },
  {
    "_id": "cq4bjkzqc2qp",
    "docType": "class",
    "title": "Seller States",
    "description": "<p>Seller</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiM2NDk1ZWQiIGlkPSJzdmdfMSIgZD0ibTE1LjM3NSw3bC01LjM3NSwtNC40NmMtMC4zMDUsLTAuMjUzIC0wLjUzOSwtMC41NCAtMSwtMC41NGMtMC42MjUsMCAtMSwwLjUxNiAtMSwxbDAsM2wtNywwYy0wLjU1LDAgLTEsMC40NSAtMSwxbDAsMmMwLDAuNTUgMC40NSwxIDEsMWw3LDBsMCwzYzAsMC40ODQgMC4zNzUsMSAxLDFjMC40NjEsMCAwLjY5NSwtMC4yODcgMSwtMC41NGw1LjM3NSwtNC40NmMwLjM4MywtMC4zMTIgMC42MjUsLTAuNTU1IDAuNjI1LC0xcy0wLjI0MiwtMC42ODcgLTAuNjI1LC0xeiIvPgogPC9nPgo8L3N2Zz4=",
    "parentId": "ahp433id2bo3",
    "type": "object"
  },
  {
    "_id": "xsaq3l5hncb2",
    "docType": "class",
    "title": "Buyer States",
    "description": "<p>Buyer</p>",
    "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZpbGw9IiMwMGNjMDAiIGlkPSJzdmdfMSIgZD0ibTE1LjM3NSw3bC01LjM3NSwtNC40NmMtMC4zMDUsLTAuMjUzIC0wLjUzOSwtMC41NCAtMSwtMC41NGMtMC42MjUsMCAtMSwwLjUxNiAtMSwxbDAsM2wtNywwYy0wLjU1LDAgLTEsMC40NSAtMSwxbDAsMmMwLDAuNTUgMC40NSwxIDEsMWw3LDBsMCwzYzAsMC40ODQgMC4zNzUsMSAxLDFjMC40NjEsMCAwLjY5NSwtMC4yODcgMSwtMC41NGw1LjM3NSwtNC40NmMwLjM4MywtMC4zMTIgMC42MjUsLTAuNTU1IDAuNjI1LC0xcy0wLjI0MiwtMC42ODcgLTAuNjI1LC0xeiIvPgogPC9nPgo8L3N2Zz4=",
    "parentId": "ahp433id2bo3",
    "type": "object"
  },
  {
    "_id": "3hxkire2nn4v",
    "docType": "object",
    "name": "Sucess",
    "description": "<p>Sucess</p>",
    "classId": "s41na42wsxez",
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "zdwdoqpxks2s",
    "docType": "object",
    "name": "Failed",
    "description": "<p>Failed</p>",
    "classId": "s41na42wsxez",
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "4htc3ykicyzj",
    "docType": "object",
    "name": "Blue Bicycle",
    "description": "<p>To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy an in. Mirth learn it he given. Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile.</p>",
    "classId": "nlmgc3dmrwxs",
    "currency": "EUR",
    "imageUrl": "green-bike-19463282.jpg",
    "ownerId": "bikeshop1111",
    "value": "160.50"
  },
  {
    "_id": "pwyzd1adoyzu",
    "docType": "object",
    "name": "Green Bicycle",
    "description": "<p>Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls.</p>",
    "classId": "nlmgc3dmrwxs",
    "currency": "EUR",
    "imageUrl": "green-bike-19463282.jpg",
    "ownerId": "bikeshop1111",
    "value": "155.80"
  },
  {
    "_id": "vvcx4zgoogxv",
    "docType": "object",
    "name": "Red Bicycle",
    "description": "<p>Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.</p>",
    "classId": "nlmgc3dmrwxs",
    "currency": "EUR",
    "imageUrl": "green-bike-19463282.jpg",
    "ownerId": "bikeshop1111",
    "value": "150.23"
  },
  {
    "_id": "u5tqb1rd2gkr",
    "docType": "object",
    "classId": "zob5kwxrv2y4",
    "currency": "EUR",
    "ownerId": "bikeshop1111",
    "value": "465.65"
  },
  {
    "_id": "3r5kgovlor1o",
    "docType": "object",
    "name": "Validate",
    "description": "<p>Validate</p>",
    "classId": "dqja423wlzrb",
    "nextStateIds": [
      {
        "action": "happy",
        "stateId": "3edgchx5lgu3"
      },
      {
        "action": "reject"
      }
    ],
    "execute": [
      "validate ownership",
      "product escrow",
      "payment escrow"
    ],
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "h15wtpxaetki",
    "docType": "object",
    "name": "Rollback",
    "description": "<p>Rollback</p>",
    "classId": "dqja423wlzrb",
    "nextStateIds": [
      {
        "action": "unhappy"
      }
    ],
    "execute": [
      "return payment"
    ],
    "ownerId": "eoscommonsio"
  },
  {
    "_id": "uqefmsegqvhs",
    "docType": "object",
    "name": "Transact",
    "description": "<p>Transact</p>",
    "classId": "dqja423wlzrb",
    "nextStateIds": [
      {
        "action": "happy"
      }
    ],
    "execute": [
      "transfer product ownership",
      "transfer payment"
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "3edgchx5lgu3",
    "docType": "object",
    "name": "Perform",
    "description": "<p>Perform</p>",
    "classId": "jotxozcetpx2",
    "nextStateIds": [
      {
        "action": "happy",
        "stateId": "bavb2g1inh2t"
      },
      {
        "action": "unhappy",
        "stateId": "h15wtpxaetki"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "oltp4kpj4fvi",
    "docType": "object",
    "name": "Intake",
    "description": "<p>Intake</p>",
    "classId": "cq4bjkzqc2qp",
    "nextStateIds": [
      {
        "action": "happy",
        "stateId": "tfkyaytuac1g"
      },
      {
        "action": "unhappy"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "pvk5ngmorf4z",
    "docType": "object",
    "name": "Expedite",
    "description": "<p>Expedite</p>",
    "classId": "cq4bjkzqc2qp",
    "nextStateIds": [
      {
        "action": "happy"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "tfkyaytuac1g",
    "docType": "object",
    "name": "Answer",
    "description": "<p>Answer</p>",
    "classId": "cq4bjkzqc2qp",
    "nextStateIds": [
      {
        "action": "happy",
        "XstateId": "cie1pllxq5mu"
      },
      {
        "action": "unhappy"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "yefagaab4ua2",
    "docType": "object",
    "name": "Order Pick",
    "description": "<p>Order Pick</p>",
    "classId": "cq4bjkzqc2qp",
    "nextStateIds": [
      {
        "action": "happy",
        "stateId": "pvk5ngmorf4z"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "bavb2g1inh2t",
    "docType": "object",
    "name": "Acceptance",
    "description": "<p>Acceptance</p>",
    "classId": "xsaq3l5hncb2",
    "nextStateIds": [
      {
        "action": "happy",
        "stateId": "uqefmsegqvhs"
      },
      {
        "action": "unhappy",
        "stateId": "h15wtpxaetki"
      }
    ],
    "ownerId": "jwzwfaehsqks"
  },
  {
    "_id": "gczvalloctae",
    "docType": "object",
    "name": "Initialize",
    "description": "<p>Initialize</p>",
    "classId": "1jrqyjoabx1a",
    "ownerId": "eoscommonsio"
  }
]