Blockly.Blocks['max30102_infor'] = {
    init: function () {
      this.jsonInit(
        {
            "type": "max30102_infor",
            "message0": "giá trị %1",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "action",
                "options": [
                  [
                    "nhịp tim (BPM)",
                    "calculate_bpm()"
                  ],
                  [
                    "oxy trong máu (SPO2)",
                    "calculate_spo2()"
                  ]
                ]
              }
            ],
            "output": null,
            "colour": 220,
            "tooltip": "",
            "helpUrl": ""
        }
    );
    }
};

Blockly.Python['max30102_infor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_machine'] = 'from machine import sleep, SoftI2C, Pin, Timer ';
  Blockly.Python.definitions_['import_utime'] = 'from utime import ticks_diff, ticks_us,ticks_ms';
  Blockly.Python.definitions_['import_max30102'] = 'i2c = SoftI2C(sda=Pin(21),scl=Pin(22),freq=400000)\n'+ 'sensor = MAX30102(i2c=i2c)\n' + 'sensor.setup_sensor()\n';
    var dropdown_action = block.getFieldValue('action');
    // TODO: Assemble Python into code variable.
    var code = 'sensor.'+ dropdown_action;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
