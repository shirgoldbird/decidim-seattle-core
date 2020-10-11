"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (exports) {
  var AutoButtonsByMinItemsComponent = (function () {
    function AutoButtonsByMinItemsComponent() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, AutoButtonsByMinItemsComponent);

      this.listSelector = options.listSelector;
      this.minItems = options.minItems;
      this.hideOnMinItemsOrLessSelector = options.hideOnMinItemsOrLessSelector;

      this.run();
    }

    _createClass(AutoButtonsByMinItemsComponent, [{
      key: "run",
      value: function run() {
        var $list = $(this.listSelector);
        var $items = $list.find(this.hideOnMinItemsOrLessSelector);

        if ($list.length <= this.minItems) {
          $items.hide();
        } else {
          $items.show();
        }
      }
    }]);

    return AutoButtonsByMinItemsComponent;
  })();

  exports.DecidimAdmin = exports.DecidimAdmin || {};
  exports.DecidimAdmin.AutoButtonsByMinItemsComponent = AutoButtonsByMinItemsComponent;
})(window);
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (exports) {
  var AutoSelectOptionsByTotalItemsComponent = (function () {
    function AutoSelectOptionsByTotalItemsComponent() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, AutoSelectOptionsByTotalItemsComponent);

      this.wrapperSelector = options.wrapperSelector;
      this.selectSelector = options.selectSelector;
      this.listSelector = options.listSelector;
    }

    _createClass(AutoSelectOptionsByTotalItemsComponent, [{
      key: "run",
      value: function run() {
        var $list = $(this.listSelector);
        var $selectField = $list.parents(this.wrapperSelector).find(this.selectSelector);

        $selectField.find("option").slice(1).remove();

        for (var idx = 2; idx <= $list.length; idx += 1) {
          $("<option value=\"" + idx + "\">" + idx + "</option>").appendTo($selectField);
        }
      }
    }]);

    return AutoSelectOptionsByTotalItemsComponent;
  })();

  exports.DecidimAdmin = exports.DecidimAdmin || {};
  exports.DecidimAdmin.AutoSelectOptionsByTotalItemsComponent = AutoSelectOptionsByTotalItemsComponent;
})(window);
/**
 * This component allows for an element's text value to be updated with the value
 * of an input whenever this input's value is changed.
 *
 * @param {object} options
 *
 * Available options:
 * {string} `inputSelector`:  The query selector to locate the input element
 * {string} `targetSelector`: The query selector to locate the target element
 * {number} `maxLength`: The maximum characters from the input value to be displayed in the target
 * {string} `omission`: The string used to shorten the value to the given maxLength (e.g. "...")
 * {string} `placeholder`: The string to be displayed in the target element when the input has no value
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (exports) {
  var LiveTextUpdateComponent = (function () {
    function LiveTextUpdateComponent() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, LiveTextUpdateComponent);

      this.inputSelector = options.inputSelector;
      this.targetSelector = options.targetSelector;
      this.maxLength = options.maxLength;
      this.omission = options.omission;
      this.placeholder = options.placeholder;
      this._bindEvent();
      this._run();
    }

    _createClass(LiveTextUpdateComponent, [{
      key: "_run",
      value: function _run() {
        var $input = $(this.inputSelector);
        var $target = $(this.targetSelector);

        var text = $input.val() || this.placeholder;

        // truncate string
        if (text.length > this.maxLength) {
          text = text.substring(0, this.maxLength - this.omission.length) + this.omission;
        }

        $target.text(text);
      }
    }, {
      key: "_bindEvent",
      value: function _bindEvent() {
        var $input = $(this.inputSelector);
        $input.on("change", this._run.bind(this));
      }
    }]);

    return LiveTextUpdateComponent;
  })();

  exports.DecidimAdmin = exports.DecidimAdmin || {};
  exports.DecidimAdmin.LiveTextUpdateComponent = LiveTextUpdateComponent;
  exports.DecidimAdmin.createLiveTextUpdateComponent = function (options) {
    return new LiveTextUpdateComponent(options);
  };
})(window);
"use strict";

(function (exports) {
  var _exports$DecidimAdmin = exports.DecidimAdmin;
  var AutoLabelByPositionComponent = _exports$DecidimAdmin.AutoLabelByPositionComponent;
  var AutoButtonsByPositionComponent = _exports$DecidimAdmin.AutoButtonsByPositionComponent;
  var AutoButtonsByMinItemsComponent = _exports$DecidimAdmin.AutoButtonsByMinItemsComponent;
  var AutoSelectOptionsByTotalItemsComponent = _exports$DecidimAdmin.AutoSelectOptionsByTotalItemsComponent;
  var createLiveTextUpdateComponent = _exports$DecidimAdmin.createLiveTextUpdateComponent;
  var createFieldDependentInputs = _exports$DecidimAdmin.createFieldDependentInputs;
  var createDynamicFields = _exports$DecidimAdmin.createDynamicFields;
  var createSortList = _exports$DecidimAdmin.createSortList;
  var createQuillEditor = exports.Decidim.createQuillEditor;

  var wrapperSelector = ".questionnaire-questions";
  var fieldSelector = ".questionnaire-question";
  var questionTypeSelector = "select[name$=\\[question_type\\]]";
  var answerOptionFieldSelector = ".questionnaire-question-answer-option";
  var answerOptionsWrapperSelector = ".questionnaire-question-answer-options";
  var answerOptionRemoveFieldButtonSelector = ".remove-answer-option";
  var matrixRowFieldSelector = ".questionnaire-question-matrix-row";
  var matrixRowsWrapperSelector = ".questionnaire-question-matrix-rows";
  var matrixRowRemoveFieldButtonSelector = ".remove-matrix-row";
  var addMatrixRowButtonSelector = ".add-matrix-row";
  var maxChoicesWrapperSelector = ".questionnaire-question-max-choices";

  var MULTIPLE_CHOICE_VALUES = ["single_option", "multiple_option", "sorting", "matrix_single", "matrix_multiple"];
  var MATRIX_VALUES = ["matrix_single", "matrix_multiple"];

  var autoLabelByPosition = new AutoLabelByPositionComponent({
    listSelector: ".questionnaire-question:not(.hidden)",
    labelSelector: ".card-title span:first",
    onPositionComputed: function onPositionComputed(el, idx) {
      $(el).find("input[name$=\\[position\\]]").val(idx);
    }
  });

  var autoButtonsByPosition = new AutoButtonsByPositionComponent({
    listSelector: ".questionnaire-question:not(.hidden)",
    hideOnFirstSelector: ".move-up-question",
    hideOnLastSelector: ".move-down-question"
  });

  var createAutoMaxChoicesByNumberOfAnswerOptions = function createAutoMaxChoicesByNumberOfAnswerOptions(fieldId) {
    return new AutoSelectOptionsByTotalItemsComponent({
      wrapperSelector: fieldSelector,
      selectSelector: maxChoicesWrapperSelector + " select",
      listSelector: "#" + fieldId + " " + answerOptionsWrapperSelector + " .questionnaire-question-answer-option:not(.hidden)"
    });
  };

  var createAutoButtonsByMinItemsForAnswerOptions = function createAutoButtonsByMinItemsForAnswerOptions(fieldId) {
    return new AutoButtonsByMinItemsComponent({
      wrapperSelector: fieldSelector,
      listSelector: "#" + fieldId + " " + answerOptionsWrapperSelector + " .questionnaire-question-answer-option:not(.hidden)",
      minItems: 2,
      hideOnMinItemsOrLessSelector: answerOptionRemoveFieldButtonSelector
    });
  };

  var createSortableList = function createSortableList() {
    createSortList(".questionnaire-questions-list:not(.published)", {
      handle: ".question-divider",
      placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
      forcePlaceholderSize: true,
      onSortUpdate: function onSortUpdate() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      }
    });
  };

  var createDynamicQuestionTitle = function createDynamicQuestionTitle(fieldId) {
    var targetSelector = "#" + fieldId + " .question-title-statement";
    var locale = $(targetSelector).data("locale");
    var maxLength = $(targetSelector).data("max-length");
    var omission = $(targetSelector).data("omission");
    var placeholder = $(targetSelector).data("placeholder");

    return createLiveTextUpdateComponent({
      inputSelector: "#" + fieldId + " input[name$=\\[body_" + locale + "\\]]",
      targetSelector: targetSelector,
      maxLength: maxLength,
      omission: omission,
      placeholder: placeholder
    });
  };

  var createDynamicFieldsForAnswerOptions = function createDynamicFieldsForAnswerOptions(fieldId) {
    var autoButtons = createAutoButtonsByMinItemsForAnswerOptions(fieldId);
    var autoSelectOptions = createAutoMaxChoicesByNumberOfAnswerOptions(fieldId);

    return createDynamicFields({
      placeholderId: "questionnaire-question-answer-option-id",
      wrapperSelector: "#" + fieldId + " " + answerOptionsWrapperSelector,
      containerSelector: ".questionnaire-question-answer-options-list",
      fieldSelector: answerOptionFieldSelector,
      addFieldButtonSelector: ".add-answer-option",
      fieldTemplateSelector: ".decidim-answer-option-template",
      removeFieldButtonSelector: answerOptionRemoveFieldButtonSelector,
      onAddField: function onAddField() {
        autoButtons.run();
        autoSelectOptions.run();
      },
      onRemoveField: function onRemoveField() {
        autoButtons.run();
        autoSelectOptions.run();
      }
    });
  };

  var dynamicFieldsForAnswerOptions = {};

  var createDynamicFieldsForMatrixRows = function createDynamicFieldsForMatrixRows(fieldId) {
    return createDynamicFields({
      placeholderId: "questionnaire-question-matrix-row-id",
      wrapperSelector: "#" + fieldId + " " + matrixRowsWrapperSelector,
      containerSelector: ".questionnaire-question-matrix-rows-list",
      fieldSelector: matrixRowFieldSelector,
      addFieldButtonSelector: addMatrixRowButtonSelector,
      fieldTemplateSelector: ".decidim-matrix-row-template",
      removeFieldButtonSelector: matrixRowRemoveFieldButtonSelector,
      onAddField: function onAddField() {},
      onRemoveField: function onRemoveField() {}
    });
  };

  var dynamicFieldsForMatrixRows = {};

  var isMultipleChoiceOption = function isMultipleChoiceOption($selectField) {
    var value = $selectField.val();

    return MULTIPLE_CHOICE_VALUES.indexOf(value) >= 0;
  };

  var isMatrix = function isMatrix($selectField) {
    var value = $selectField.val();

    return MATRIX_VALUES.indexOf(value) >= 0;
  };

  var setupInitialQuestionAttributes = function setupInitialQuestionAttributes($target) {
    var fieldId = $target.attr("id");
    var $fieldQuestionTypeSelect = $target.find(questionTypeSelector);

    createDynamicQuestionTitle(fieldId);

    createFieldDependentInputs({
      controllerField: $fieldQuestionTypeSelect,
      wrapperSelector: fieldSelector,
      dependentFieldsSelector: answerOptionsWrapperSelector,
      dependentInputSelector: answerOptionFieldSelector + " input",
      enablingCondition: function enablingCondition($field) {
        return isMultipleChoiceOption($field);
      }
    });

    createFieldDependentInputs({
      controllerField: $fieldQuestionTypeSelect,
      wrapperSelector: fieldSelector,
      dependentFieldsSelector: maxChoicesWrapperSelector,
      dependentInputSelector: "select",
      enablingCondition: function enablingCondition($field) {
        return $field.val() === "multiple_option" || $field.val() === "matrix_multiple";
      }
    });

    createFieldDependentInputs({
      controllerField: $fieldQuestionTypeSelect,
      wrapperSelector: fieldSelector,
      dependentFieldsSelector: matrixRowsWrapperSelector,
      dependentInputSelector: matrixRowFieldSelector + " input",
      enablingCondition: function enablingCondition($field) {
        return isMatrix($field);
      }
    });

    dynamicFieldsForAnswerOptions[fieldId] = createDynamicFieldsForAnswerOptions(fieldId);
    dynamicFieldsForMatrixRows[fieldId] = createDynamicFieldsForMatrixRows(fieldId);

    var dynamicFieldsAnswerOptions = dynamicFieldsForAnswerOptions[fieldId];
    var dynamicFieldsMatrixRows = dynamicFieldsForMatrixRows[fieldId];

    var onQuestionTypeChange = function onQuestionTypeChange() {
      if (isMultipleChoiceOption($fieldQuestionTypeSelect)) {
        var nOptions = $fieldQuestionTypeSelect.parents(fieldSelector).find(answerOptionFieldSelector).length;

        if (nOptions === 0) {
          dynamicFieldsAnswerOptions._addField();
          dynamicFieldsAnswerOptions._addField();
        }
      }

      if (isMatrix($fieldQuestionTypeSelect)) {
        var nRows = $fieldQuestionTypeSelect.parents(fieldSelector).find(matrixRowFieldSelector).length;

        if (nRows === 0) {
          dynamicFieldsMatrixRows._addField();
          dynamicFieldsMatrixRows._addField();
        }
      }
    };

    $fieldQuestionTypeSelect.on("change", onQuestionTypeChange);

    onQuestionTypeChange();
  };

  var hideDeletedQuestion = function hideDeletedQuestion($target) {
    var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();

    if (inputDeleted === "true") {
      $target.addClass("hidden");
      $target.hide();
    }
  };

  createDynamicFields({
    placeholderId: "questionnaire-question-id",
    wrapperSelector: wrapperSelector,
    containerSelector: ".questionnaire-questions-list",
    fieldSelector: fieldSelector,
    addFieldButtonSelector: ".add-question",
    addSeparatorButtonSelector: ".add-separator",
    fieldTemplateSelector: ".decidim-question-template",
    separatorTemplateSelector: ".decidim-separator-template",
    removeFieldButtonSelector: ".remove-question",
    moveUpFieldButtonSelector: ".move-up-question",
    moveDownFieldButtonSelector: ".move-down-question",
    onAddField: function onAddField($field) {
      var $collapsible = $field.find(".collapsible");
      if ($collapsible.length > 0) {
        var collapsibleId = $collapsible.attr("id").replace("-question-card", "");
        var toggleAttr = collapsibleId + "-question-card button--collapse-question-" + collapsibleId + " button--expand-question-" + collapsibleId;
        $field.find(".question--collapse").data("toggle", toggleAttr);
      }

      setupInitialQuestionAttributes($field);
      createSortableList();

      $field.find(".editor-container").each(function (idx, el) {
        createQuillEditor(el);
      });

      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    },
    onRemoveField: function onRemoveField($field) {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();

      $field.find(answerOptionRemoveFieldButtonSelector).each(function (idx, el) {
        dynamicFieldsForAnswerOptions[$field.attr("id")]._removeField(el);
      });
      $field.find(matrixRowRemoveFieldButtonSelector).each(function (idx, el) {
        dynamicFieldsForMatrixRows[$field.attr("id")]._removeField(el);
      });
    },
    onMoveUpField: function onMoveUpField() {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    },
    onMoveDownField: function onMoveDownField() {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    }
  });

  createSortableList();

  $(fieldSelector).each(function (idx, el) {
    var $target = $(el);

    hideDeletedQuestion($target);
    setupInitialQuestionAttributes($target);
  });

  autoLabelByPosition.run();
  autoButtonsByPosition.run();
})(window);
