Blockly.Blocks["newline"] = {
  init: function () {
    this.appendDummyInput().appendField("new line");
    this.setOutput(true, "String");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["newline"] = function (
  block,
  generator
) {
  const code = '"\\n"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["alert"] = {
  init: function () {
    this.appendValueInput("alert").setCheck("String").appendField("alert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["alert"] = function (block, generator) {
  const value = generator.valueToCode(block, "alert", javascript.Order.ATOMIC);
  const code = `alert(${value});\n`;
  return code;
};

Blockly.Blocks["alert_confirm"] = {
  init: function () {
    this.appendValueInput("val").setCheck("String").appendField("confirm");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["alert_confirm"] = function (
  block,
  generator
) {
  const val = generator.valueToCode(block, "val", javascript.Order.ATOMIC);
  const code = `confirm(${val})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["alert_prompt"] = {
  init: function () {
    this.appendValueInput("val").setCheck("String").appendField("prompt");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["alert_prompt"] = function (
  block,
  generator
) {
  const val = generator.valueToCode(block, "val", javascript.Order.ATOMIC);
  const code = `prompt(${val})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["to_any"] = {
  init: function () {
    this.appendValueInput("in").setCheck(null).appendField("to any");
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["to_any"] = function (
  block,
  generator
) {
  const _in = generator.valueToCode(block, "in", javascript.Order.ATOMIC);
  const code = _in;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["equals_exactly"] = {
  init: function () {
    this.appendValueInput("v1").setCheck(null);
    this.appendValueInput("v2").setCheck(null).appendField("===");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["equals_exactly"] = function (
  block,
  generator
) {
  const v1 = generator.valueToCode(block, "v1", javascript.Order.ATOMIC);
  const v2 = generator.valueToCode(block, "v2", javascript.Order.ATOMIC);
  const code = `${v1} === ${v2}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["not_equals_exactly"] = {
  init: function () {
    this.appendValueInput("v1").setCheck(null);
    this.appendValueInput("v2").setCheck(null).appendField("!==");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["not_equals_exactly"] = function (
  block,
  generator
) {
  const v1 = generator.valueToCode(block, "v1", javascript.Order.ATOMIC);
  const v2 = generator.valueToCode(block, "v2", javascript.Order.ATOMIC);
  const code = `${v1} !== ${v2}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["random_bool"] = {
  init: function () {
    this.appendDummyInput().appendField("random bool");
    this.setOutput(true, "Boolean");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["random_bool"] = function (
  block,
  generator
) {
  const code = "(Math.round(Math.random()) === 1)";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["inline_function_a"] = {
  init: function () {
    this.appendDummyInput().appendField("inline function");
    this.appendStatementInput("statement").setCheck(null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["inline_function_a"] = function (
  block,
  generator
) {
  const statement = generator.statementToCode(block, "statement");
  const code = `(() => {
const localVars = {};
${statement}
})();\n`;
  return code;
};

Blockly.Blocks["inline_function_b"] = {
  init: function () {
    this.appendDummyInput().appendField("inline function");
    this.appendStatementInput("statement").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["inline_function_b"] = function (
  block,
  generator
) {
  const statement = generator.statementToCode(block, "statement");
  const code = `(() => {
const localVars = {};
${statement}
})();\n`;
  return code;
};

Blockly.Blocks["inline_function_c"] = {
  init: function () {
    this.appendDummyInput().appendField("inline function");
    this.appendStatementInput("statement").setCheck(null);
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["inline_function_c"] = function (
  block,
  generator
) {
  const statement = generator.statementToCode(block, "statement");
  const code = `(() => {
const localVars = {};
${statement}
})()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
