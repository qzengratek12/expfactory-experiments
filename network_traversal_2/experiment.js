/* ************************************ */
/* Define helper functions */
/* ************************************ */

var makePracticeTrialList = function() {
	var filenames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
	var path = '/static/experiments/network_traversal_2/images/'
	var prefix = '<div class = shapebox><img class = stim src = '
	var postfix = '></img></div>'

	trial_list = []
	for (i = 0; i < filenames.length; i++) {
		tmp_obj = {}
		stim_name = filenames[i]
		tmp_obj.stimulus = prefix + path + stim_name + '.png' + postfix

		tmp_data2 = {
			trial_id: 'stim',
			stim_id: stim_name,
			condition: 'unrotated',
			correct_response: 37
		}
		tmp_data = $.extend({}, tmp_data2)
		tmp_obj.data = tmp_data
		trial_list.push(tmp_obj)
	}
	return trial_list
}


var makePractice2TrialList = function() {
	var filenames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
	var path = '/static/experiments/network_traversal_2/images/compare/'
	var prefix = '<div class = shapebox2><img class = stim src = '
	var postfix = '></img></div>'

	right_resp = [0, 2, 4, 5, 6, 8, 10, 12, 13, 14]
	left_resp = [1, 3, 7, 9, 11]

	trial_list = []
	for (i = 0; i < filenames.length; i++) {
		tmp_obj = {}
		stim_name = filenames[i]
		tmp_obj.stimulus = prefix + path + stim_name + '_compare' + '.png' + postfix

		if (left_resp.includes(i)) {
			tmp_data2 = {
				trial_id: 'stim',
				stim_id: stim_name,
				condition: 'left',
				correct_response: 90
			}
			tmp_obj.key_answer = 90
		} else {
			tmp_data2 = {
				trial_id: 'stim',
				stim_id: stim_name,
				condition: 'right',
				correct_response: 77
			}
			tmp_obj.key_answer = 77
		}

		tmp_data = $.extend({}, tmp_data2)
		tmp_obj.data = tmp_data
		trial_list.push(tmp_obj)
	}
	return trial_list
}


var makeExposureTrialList = function() {
	var stim_names = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	var randomized_stim_names = jsPsych.randomization.repeat(stim_names, 1)
	
	var walk = ['10', '12', '11', '13_rot', '14', '0', '3', '2', '1', '4', '5', '8', '6', '9', '7_rot', '6', '5', '4', '1', '2', '3_rot', '0', '14', '11', '13_rot', '12', '10', '9', '8', '7', '6', '5', '7', '8', '9', '10', '12', '11', '13', '14', '0_rot', '2', '3', '4_rot', '1', '4', '3', '2_rot', '1_rot', '0', '14', '13_rot', '12', '11_rot', '10', '9_rot', '6', '8', '5', '7', '5', '8', '7', '6_rot', '9_rot', '10', '11', '12', '13_rot', '14_rot', '0', '2', '3', '4', '1', '3', '1', '0', '2', '4', '5_rot', '7', '8', '6', '9', '10', '13', '14', '11', '12', '10', '13', '11', '12', '14', '0', '1', '3', '2', '4', '5', '7', '8', '9_rot', '6', '5', '6', '7', '8', '9', '10', '13', '12', '11_rot', '14', '0', '1', '3', '4', '2', '0', '14', '11', '13', '12', '10', '9', '6', '8', '7_rot', '5', '4', '2', '1', '3', '1_rot', '2', '4_rot', '3', '0', '14', '13', '12', '11', '10', '9', '6', '8', '7_rot', '5', '4', '1', '2', '3', '0', '14', '12_rot', '13', '11', '10', '9', '8', '7', '5', '6', '9', '7', '8', '6', '5', '4', '1', '3', '2', '0', '14', '12', '13', '11', '10', '12', '11', '10', '13', '14', '0', '2_rot', '3', '1', '4', '5', '8', '6', '9', '7', '6', '7', '8', '9', '10_rot', '12', '13', '11', '14', '0', '2', '3', '1', '4', '5', '6_rot', '9', '10', '11', '12', '13', '14', '0_rot', '3', '1', '2', '4', '5', '7', '8', '7', '6', '8', '9', '10', '12', '11', '13', '14', '0', '2', '1', '3', '4', '5', '7_rot', '9', '8', '6', '5', '4_rot', '3', '2_rot', '1_rot', '0', '14', '13', '10', '11', '12', '11', '13', '12', '14', '0', '1', '2', '3_rot', '4_rot', '5', '8_rot', '7', '6_rot', '9', '10', '13', '11', '14', '12', '10', '9', '8', '7', '6', '5', '4', '2_rot', '1', '3', '0', '2_rot', '1', '0', '3', '4', '5_rot', '8', '7', '6', '9', '10', '12', '11', '13', '14', '11_rot', '10', '9', '7', '8', '6', '5', '4', '1', '3', '2', '0', '14_rot', '13', '12', '10_rot', '9', '7', '8', '6', '5', '4', '1', '3', '2', '0_rot', '14', '11', '12_rot', '13', '10', '9', '6', '8', '7', '5', '4', '3', '2', '1_rot', '0', '14', '13', '12', '11_rot', '12_rot', '10', '13', '11', '14', '0', '2_rot', '3', '1', '4_rot', '5', '8', '7', '9', '6', '8', '6', '5_rot', '7', '9', '10', '11', '13', '12', '14_rot', '0', '3', '4', '1', '2', '1', '3_rot', '4', '2', '0', '14', '13_rot', '12', '11', '10', '9_rot', '6', '5', '8', '7', '6', '8', '7', '9', '10', '12', '11', '13', '14', '0', '3_rot', '2', '1', '4', '5', '7', '9', '10', '12', '11', '13', '14', '0', '1', '3', '2', '4', '5', '8_rot', '6', '7', '6', '9', '8', '5', '4_rot', '1', '2', '3', '0', '14', '13', '11', '12_rot', '10', '13', '14', '12', '11', '10', '9_rot', '8', '7', '6_rot', '5', '4_rot', '2', '0', '3_rot', '1', '4', '1', '3', '2', '0', '14', '11', '12', '13', '10', '9', '8', '6_rot', '7', '5_rot', '7', '5', '8', '6', '9', '10_rot', '12', '11', '13_rot', '14', '0', '2', '1_rot', '3', '4_rot', '3', '1', '2', '0', '14', '12', '13', '11', '10_rot', '9', '7', '6', '8', '5', '4_rot', '1', '3', '0_rot', '2', '4', '5', '8', '7_rot', '6', '9', '10', '12', '11', '14', '13', '11', '12', '10', '13', '14_rot', '0', '2', '1_rot', '3', '4', '5', '6', '7', '9', '8', '5_rot', '4', '3', '2', '1', '0', '14_rot', '11', '12', '13', '10', '9_rot', '6', '8', '7', '8', '5', '6', '7', '9', '10', '11', '13', '12', '14', '0', '2', '3', '4', '1', '3', '2', '0', '1', '4', '5', '6', '8', '7', '9_rot', '10_rot', '13', '12', '14_rot', '11', '12', '13', '11', '14_rot', '0', '2_rot', '1', '3', '4', '5_rot', '7', '6', '8', '9', '10', '9', '6', '7', '8', '5', '4', '2', '1', '3', '0', '14', '11', '13', '12', '10', '12', '14', '0', '2', '3', '1', '4', '5', '8_rot', '7', '6', '9', '10', '11', '13_rot', '11_rot', '14', '13', '12', '10', '9', '8_rot', '6', '7', '5', '4', '1', '0', '3', '2', '4', '3', '1', '2', '0', '14', '13', '11_rot', '12_rot', '10_rot', '9', '8', '7', '5', '6', '9', '7', '6', '8', '5', '4', '3', '2', '1', '0', '14', '13', '10', '12', '11', '12', '14', '0', '1', '2', '3', '4', '5', '6_rot', '8_rot', '7', '9', '10', '11', '13', '12', '14', '11', '13', '10', '9', '8_rot', '6', '7', '5', '4', '1', '2', '3_rot', '0', '3', '1', '4', '2', '0', '14', '12', '11', '13', '10', '9_rot', '6', '7', '8', '5', '6', '9', '10_rot', '11', '13', '12', '14', '0_rot', '3', '1', '2', '4', '5', '8', '7', '6', '5', '7', '8', '9', '10', '13', '11', '12', '14', '0', '1', '3', '2', '4', '3', '1', '0_rot', '2', '4', '5', '7_rot', '8', '6_rot', '9', '10', '13', '12', '11', '14', '13_rot', '10', '9', '6', '7', '8', '5', '4', '2_rot', '1', '3', '0', '14', '11', '12', '13', '11', '14', '12', '10', '9', '7', '6', '8', '5', '4', '3', '1', '0', '2', '1_rot', '2', '0', '3', '4_rot', '5', '7', '8', '6_rot', '9', '10', '12', '13_rot', '14_rot', '11', '10', '9', '7_rot', '8_rot', '6', '5', '4', '1_rot', '3', '2', '0', '14', '11_rot', '13_rot', '12', '11', '13_rot', '14', '12', '10', '9', '8', '7', '6', '5', '4', '3', '1_rot', '0_rot', '2', '0', '2', '3', '1', '4', '5', '8', '6', '7', '9', '10', '12', '11_rot', '14', '13', '11', '14', '13_rot', '12_rot', '10_rot', '9', '8', '7', '6', '5_rot', '4', '1', '0', '2', '3_rot', '4', '5_rot', '7', '8_rot', '6', '9', '10', '12', '11', '13', '14', '0', '1', '2', '3_rot', '4_rot', '2', '3', '1', '0', '14', '11', '13', '12', '10', '9', '7_rot', '6', '5_rot', '8', '9', '8_rot', '6_rot', '7', '5', '4', '3_rot', '1_rot', '2', '0', '14', '12', '11', '10', '13', '12', '13', '11', '14', '0', '1', '3', '2', '4', '5', '7_rot', '8_rot', '6', '9', '10', '11', '13', '10', '12', '14', '0', '3', '1', '2', '4_rot', '5_rot', '7', '6', '9', '8', '5', '7', '8_rot', '6', '9', '10_rot', '12', '11', '13', '14', '0', '3_rot', '4', '1', '2', '4', '5', '6', '7', '8_rot', '9', '10', '13', '12', '11', '14_rot', '0', '2', '1', '3', '0', '1_rot', '3', '2', '4', '5', '6', '7', '8', '9', '10', '13', '11', '14', '12', '14', '12_rot', '13', '11_rot', '10', '9_rot', '6', '7', '8_rot', '5', '4', '1', '0', '2_rot', '3', '4', '1', '3', '2', '0', '14_rot', '12', '13', '11', '10_rot', '9', '8', '7', '6', '5', '7', '9_rot', '8_rot', '6', '5', '4', '2', '1', '3', '0', '14', '13_rot', '11', '10', '12', '13', '14', '11', '12', '10', '9', '8', '6', '7', '5', '4', '2', '1', '0', '3', '0', '2', '3', '1', '4', '5', '7', '8', '6_rot', '9', '10_rot', '11', '13', '12', '14', '11', '14', '13', '12', '10', '9', '7_rot', '8', '6', '5', '4_rot', '1', '0', '2', '3', '2', '4', '3', '1', '0', '14', '12', '11', '13_rot', '10', '9', '8', '6', '5', '7', '5', '6', '7', '8', '9', '10', '13', '12', '11_rot', '14', '0', '2', '1_rot', '4', '3', '0_rot', '3_rot', '1', '2_rot', '4', '5', '8', '7', '6', '9', '10', '13', '12', '14', '11_rot', '12', '10', '13_rot', '11_rot', '14', '0', '2', '1_rot', '3', '4', '5', '8', '7', '6', '9_rot', '8', '9', '7', '6', '5', '4', '3', '1', '2', '0', '14', '13_rot', '10', '11', '12', '14', '13', '11', '12', '10_rot', '9', '6', '7', '8', '5', '4_rot', '2', '3', '1_rot', '0', '3_rot', '2', '0', '1', '4', '5', '8', '6', '7', '9', '10', '12', '13', '14_rot', '11', '10', '12', '11', '13', '14', '0', '2_rot', '1_rot', '3_rot', '4', '5', '6', '9', '7', '8', '9', '6', '7', '8_rot', '5', '4', '3', '1_rot', '2', '0', '14_rot', '13', '12', '10', '11', '10', '9', '8', '7', '6', '5', '4', '3_rot', '2', '1', '0', '14', '13', '12', '11', '10', '13', '12', '11', '14', '0', '3', '2', '1_rot', '4_rot', '5', '6_rot', '9', '7_rot', '8', '7', '6', '9', '8_rot', '5', '4', '1', '3', '2', '0', '14', '11', '10', '12', '13_rot', '12', '14', '11', '13_rot', '10', '9_rot', '8', '6', '7', '5', '4', '2', '3', '0', '1_rot', '3', '0', '2', '1_rot', '4', '5', '7', '6', '8', '9', '10', '12', '14', '13', '11', '13', '14', '11', '12', '10', '9', '8', '7', '6', '5', '4', '3', '1_rot', '2', '0', '1', '2', '0_rot', '3', '4', '5', '8', '6', '7', '9_rot', '10', '12_rot', '14', '13', '11', '12', '11', '14', '13_rot', '10', '9', '7_rot', '8', '6_rot', '5_rot', '4_rot', '2', '1', '0_rot', '3', '0', '2', '1', '3', '4_rot', '5', '6', '7', '8', '9', '10', '12', '14', '13_rot', '11_rot', '13', '11', '12_rot', '10', '9', '7', '6', '8', '5', '4', '3', '2', '1', '0', '14_rot', '11', '13', '10_rot', '12', '14', '0', '3_rot', '2', '1', '4', '5', '8', '9_rot', '6', '7', '6', '5', '4', '1', '2_rot', '3', '0', '14', '12', '13_rot', '11', '10', '9', '8', '7', '6', '8', '9', '10', '11', '13_rot', '12', '14_rot', '0', '3', '2_rot', '1', '4', '5_rot', '7', '8', '7', '9', '6', '5', '4', '3', '2', '1', '0', '14', '11', '10', '13', '12', '10', '11_rot', '12', '13', '14', '0_rot', '1', '2', '3', '4', '5', '7', '6', '9', '8', '6', '8', '9_rot', '7', '5', '4', '2_rot', '3', '1', '0', '14', '12', '11', '13', '10']
	var path = '/static/experiments/network_traversal_2/images/'
	var prefix = '<div class = shapebox><img class = stim src = '
	var postfix = '></img></div>'

	trial_list = []
	for (i = 0; i < walk.length; i++) {
		tmp_obj = {}

		if ((walk[i].length === 1) || (walk[i].charAt(1) === '_')) {
			stim_num = Number(walk[i].charAt(0))
		} else {
			stim_num = Number(walk[i].slice(0, 2))
			}

		mapped_stim_num = randomized_stim_names[stim_num]

		if (walk[i].includes('rot')) {
			tmp_obj.stimulus = prefix + path + mapped_stim_num + '_rot' + '.png' + postfix
			mapped_stim_name = mapped_stim_num + '_rot'
		} else {
			tmp_obj.stimulus = prefix + path + mapped_stim_num + '.png' + postfix
			mapped_stim_name = mapped_stim_num
		}

		if (walk[i].includes('rot')) {
			tmp_data2 = {
				walk_node: walk[i],
				trial_id: 'stim',
				stim_id: mapped_stim_name,
				condition: 'rotated',
				correct_response: 39
			}
			tmp_obj.key_answer = 39
		} else {
			tmp_data2 = {
				walk_node: walk[i],
				trial_id: 'stim',
				stim_id: mapped_stim_name,
				condition: 'unrotated',
				correct_response: 37
			}
			tmp_obj.key_answer = 37
		}
		tmp_data = $.extend({}, tmp_data2)
		tmp_obj.data = tmp_data
		trial_list.push(tmp_obj)
	}

	// Make segmentation stimuli
	seg_trial_list = []
	var seg_walk = ['9', '7', '9', '8', '5', '7', '6', '5', '6', '9', '7', '9', '10', '9', '10', '11', '12', '13', '14', '0', '3', '2', '1', '4', '5', '8', '6', '7', '9', '10', '9', '8', '5', '4', '2', '1', '4', '5', '4', '5', '7', '9', '8', '9', '7', '5', '6', '8', '7', '9', '10', '11', '12', '13', '14', '0', '3', '2', '1', '4', '1', '3', '0', '2', '0', '1', '3', '1', '3', '2', '1', '3', '4', '3', '1', '4', '5', '7', '8', '6', '9', '10', '12', '13', '11', '14', '0', '2', '1', '3', '0', '14', '13', '10', '9', '10', '11', '12', '10', '13', '10', '13', '12', '13', '12', '11', '14', '0', '1', '2', '3', '4', '5', '7', '8', '6', '9', '10', '13', '12', '11', '10', '13', '10', '9', '10', '9', '6', '7', '8', '9', '8', '9', '10', '11', '12', '13', '14', '11', '10', '9', '6', '8', '7', '5', '4', '1', '0', '2', '3', '0', '2', '1', '3', '4', '2', '3', '0', '1', '3', '1', '4', '5', '6', '5', '8', '5', '7', '6', '9', '10', '12', '11', '13', '14', '0', '3', '1', '4', '2', '1', '2', '4', '1', '0', '14', '13', '10', '13', '14', '13', '12', '11', '14', '0', '1', '0', '3', '2', '4', '5', '6', '8', '7', '9', '10', '11', '14', '12', '13', '14', '11', '12', '14', '0', '2', '0', '3', '1', '3', '0', '2', '1', '3', '4', '3', '0', '14', '12', '11', '13', '10', '9', '7', '8', '6', '5', '4', '1', '2', '3', '4', '3', '0', '3', '0', '14', '11', '14', '11', '10', '9', '7', '5', '7', '9', '7', '6', '8', '5', '4', '3', '1', '2', '0', '14', '12', '13', '11', '10', '9', '8', '5', '6', '5', '7', '9', '10', '13', '12', '11', '12', '10', '11', '13', '14', '0', '3', '2', '1', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '10', '13', '14', '12', '13', '10', '13', '10', '12', '10', '13', '12', '13', '12', '14', '11', '10', '9', '6', '7', '8', '5', '4', '1', '2', '3', '0', '14', '13', '12', '11', '14', '13', '11', '10', '9', '8', '6', '9', '10', '9', '8', '7', '5', '8', '9', '7', '6', '8', '5', '4', '2', '3', '1', '0', '14', '13', '12', '11', '10', '9', '8', '7', '5', '7', '8', '7', '5', '8', '7', '9', '7', '5', '8', '9', '6', '7', '8', '9', '10', '12', '11', '13', '14', '0', '3', '2', '1', '4', '5', '6', '5', '8', '5', '4', '1', '2', '3', '2', '3', '4', '1', '0', '14', '11', '10', '13', '12', '11', '14', '0', '3', '2', '1', '4', '5', '6', '9', '7', '8', '9', '10', '12', '14', '11', '10', '9', '6', '9', '6', '7', '8', '5', '6', '7', '8', '9', '10', '13', '12', '11', '14', '0', '1', '2', '3', '4', '5', '7', '6', '9', '7', '9', '10', '9', '10', '11', '12', '14', '0', '1', '2', '3', '1', '3', '4', '5', '8', '6', '7', '9', '10', '11', '13', '12', '14', '0', '3', '1', '2', '4', '3', '1', '2', '3', '2', '1', '4', '5', '4', '1', '3', '4', '2', '3', '2', '3', '1', '0', '14', '12', '13', '11', '10', '9', '6', '7', '8', '5', '4', '1', '0', '14', '0', '14', '12', '10', '12', '11', '13', '14', '12', '11', '14', '0', '2', '4', '5', '7', '8', '6', '9', '10', '11', '13', '12', '14', '0', '3', '1', '3', '4', '5', '7', '9', '10', '9', '10', '12', '10', '12', '11', '12', '13', '12', '11', '10', '13', '12', '14', '0', '3', '1', '2', '4', '5', '8', '9', '6', '7', '6', '7', '9', '10', '12', '11', '10', '9', '10', '9', '10', '13', '12', '11', '13', '10', '13', '11', '12', '14', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (i = 0; i < seg_walk.length; i++) {
		tmp_obj = {}

		if (seg_walk[i].length === 1) {
			stim_num = Number(seg_walk[i].charAt(0))
		} else {
			stim_num = Number(seg_walk[i].slice(0, 2))
			}
		mapped_stim_num = randomized_stim_names[stim_num]

		tmp_obj.stimulus = prefix + path + mapped_stim_num + '.png' + postfix
		mapped_stim_name = mapped_stim_num

		tmp_data2 = {
			walk_node: seg_walk[i],
			trial_id: 'stim',
			stim_id: mapped_stim_name,
			condition: 'unrotated',
			correct_response: 32
		}
		tmp_obj.key_answer = 32

		tmp_data = $.extend({}, tmp_data2)
		tmp_obj.data = tmp_data
		seg_trial_list.push(tmp_obj)
	}

	// Make oddmanout stimuli
	oddmanout_trial_list = []
	var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
	var randomized_order = jsPsych.randomization.repeat(order, 1)

	var oddmanout_stim = [['4', '3', '5'], ['10', '13', '9'], ['5', '2', '4'], ['0', '1', '14'], ['10', '9', '7'], ['13', '14', '0'], ['7', '4', '5'], ['12', '14', '0'], ['0', '14', '11'], ['3', '14', '0'], ['1', '5', '4'], ['10', '12', '9'], ['0', '14', '2'], ['5', '4', '6'], ['9', '11', '10'], ['6', '9', '10'], ['4', '5', '8'], ['10', '8', '9']]
	var answers = ['51', '51', '49', '51', '49', '51', '50', '51', '49', '50', '50', '51', '50', '50', '49', '51', '49', '51']

	oddmanout_stim_randomized = []
	answers_randomized = []

	prefix = '<div style="width:830px; height:200px; overflow:auto; position:absolute; top:50%; left:65%; margin-right:-50%; transform: translate(-50%,-50%)"><div style="width: 2000px; height: 90px;">'
	img_prefix = '<img src='
	img_suffix = ' />'
	path = '/static/experiments/network_traversal_2/images/'
	suffix = '</div></div>'

	for (i = 0; i < oddmanout_stim.length; i++) {
		oddmanout_stim_randomized.push(oddmanout_stim[randomized_order[i]])
		answers_randomized.push(answers[randomized_order[i]])
	}

	for (i = 0; i < oddmanout_stim.length; i++) {
		tmp_obj = {}
		stim_list = []
		stim_html = prefix
		for (j = 0; j < 3; j++) {
			stim_num = oddmanout_stim_randomized[i][j]
			mapped_stim_num = randomized_stim_names[stim_num]

			tmp_stim = img_prefix + '"' + path + mapped_stim_num + '.png"' + img_suffix
			stim_html += tmp_stim
		}
		stim_html += suffix
		tmp_obj.stimulus = stim_html

		tmp_data2 = {
			stim_nums: oddmanout_stim_randomized[i],
			trial_id: 'oddmanout',
			correct_response: answers_randomized[i]
		}
		tmp_obj.key_answer = answers_randomized[i]

		tmp_data = $.extend({}, tmp_data2)
		tmp_obj.data = tmp_data
		oddmanout_trial_list.push(tmp_obj)
	}


	trial_lists = [trial_list, seg_trial_list, oddmanout_trial_list]
	return trial_lists
}

var getInstructFeedback = function() {
	return '<div class = centerbox><p class = center-block-text>' + feedback_instruct_text +
		'</p></div>'
}



/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds
var credit_var = 0
var current_practice_trial = 0
var current_trial = 0

// Preload stim
var path = '/static/experiments/network_traversal_2/images/'
var images = []
for (i = 1; i < 16; i++) {
	images.push(path + i + '.png')
}
for (j = 1; j < 16; j++) {
	images.push(path + j + '_rot' + '.png')
} 
var path = '/static/experiments/network_traversal_2/images/compare/'
for (i = 1; i < 16; i++) {
	images.push(path + i + '_compare.png')
}
jsPsych.pluginAPI.preloadImages(images);


// Set up experiment stimulus order
var practice1_trials = makePracticeTrialList()
var practice2_trials = makePractice2TrialList()
var trials = makeExposureTrialList()
var exposure_trials = trials[0]
var segmentation_trials = trials[1]
var oddmanout_trials = trials[2]


/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */


/* define static blocks */
var feedback_instruct_text =
	'Welcome! This experiment will take about 60 minutes. Press <strong>enter</strong> to begin.'

var feedback_instruct_block = {
	type: 'poldrack-text',
	data: {
		trial_id: "instruction"
	},
	cont_key: [13],
	text: getInstructFeedback,
	timing_post_trial: 0,
	timing_response: 180000
};

var instructions_block = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>During the main portion of the experiment, you’ll see abstract images on the screen, one at a time.</p>' +
		'<p class = center-block-text>Your job is to press the <strong>LEFT</strong> arrow on your keyboard if the image IS NOT rotated, and to press the <strong>RIGHT</strong> arrow on your keyboard if the image IS rotated.</p>' +
		'<p class = center-block-text>It is important that you respond as quickly and accurately as possible.</p></div>',
		'<div class = centerbox><p class = block-text>Before beginning the experiment, you’ll get some practice seeing each image when it IS NOT rotated as well as how it looks when it IS rotated.</p></div>',
		'<div class = centerbox><p class = block-text>First, we’ll show you each of the 15 images in their normal unrotated positions. Your job is simply to look at each image to become familiar with it.</p>' +
		'<p class = center-block-text>When you’re ready, click <strong>End Instructions</strong> to begin.</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
};

var instruction_node = {
	timeline: [feedback_instruct_block, instructions_block],
	loop_function: function(data) {
		for (i = 0; i < data.length; i++) {
			if ((data[i].trial_type == 'poldrack-instructions') && (data[i].rt != -1)) {
				rt = data[i].rt
				sumInstructTime = sumInstructTime + rt
			}
		}
		if (sumInstructTime <= instructTimeThresh * 1000) {
			feedback_instruct_text =
				'Read through instructions too quickly.  Please take your time and make sure you understand the instructions.  Press <strong>enter</strong> to continue.'
			return true
		} else if (sumInstructTime > instructTimeThresh * 1000) {
			feedback_instruct_text = 'Done with instructions. Press <strong>enter</strong> to continue.'
			return false
		}
	}
}

network_traversal_2_experiment = []
network_traversal_2_experiment.push(instruction_node)


var practice1_block = {
	type: 'poldrack-single-stim',
	timeline: practice1_trials,
	is_html: true,
	choices: 'none',
	data: {
		trial_id: "practice1",
		exp_id: "network_traversal_2"
	},
	timing_response: 5000,
	timing_post_trial: 0,
	on_finish: function() {
		jsPsych.data.addDataToLastTrial({
			trial_num: current_practice_trial
		})
		current_practice_trial += 1
	}
}
network_traversal_2_experiment.push(practice1_block)

var instructions2_block = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>Great! Now, we’ll show you each image next to its rotated version. Your job is to pick out which of the two images IS NOT rotated by pressing <strong>‘z’</strong> or <strong>‘m’</strong> on your keyboard, to indicate whether the LEFT (z) or RIGHT (m) image IS NOT rotated.</p>' + 
		'<p class = block-text>When you’re ready, click <strong>End Instructions</strong> to begin.</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
};
network_traversal_2_experiment.push(instructions2_block)

var get_practice2_trial_stim = function() {
	practice2_trial_data = practice2_trials.data.pop()
	return practice2_trials.stimulus.pop()
}

for (i = 0; i < practice2_trials.length; i++) {
	var practice2_trial = {
		type: 'poldrack-categorize',
		stimulus: practice2_trials[i].stimulus,
		key_answer: practice2_trials[i].key_answer,
		data: {
			trial_id: 'practice2_trial',
			exp_id: 'network_traversal_2'
		},
		choices: [77, 90],
		correct_text: '<div class = shapebox3><div style="color:green"; class = center-text>Correct!</div></div>',
		incorrect_text: '<div class = shapebox3><div style="color:red"; class = center-text>Incorrect, try again!</div></div>',
		show_stim_with_feedback: true,
		timing_feedback_duration: 2000,
		is_html: true,
		timing_response: -1,
		timing_post_trial: 0,
		force_correct_button_press: true
	}
	network_traversal_2_experiment.push(practice2_trial)
}


var exposure_instructions_block = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>Well done! You’re almost ready to start the experiment. As a reminder, in the experiment you will see one image at a time. Sometimes the image will be rotated. Your job is to press the <strong>LEFT</strong> arrow if the image IS NOT rotated, and to press the <strong>RIGHT</strong> arrow if the image is rotated.</p></div>',
		'<div class = centerbox><p class = block-text>During the experiment, if you answer <strong>incorrectly</strong> you’ll hear a <strong>high-pitched</strong> tone. If you answer <strong>too slowly</strong>, you’ll hear a <strong>low-pitched tone</strong>. If you hear hear either of these tones for more than 10 images in a row, the experiment will automatically end, so please make sure to pay attention and try your best!</p></div>',
		'<div class = centerbox><p class = block-text><strong>Please check your volume is turned on.</strong></p></div>',
		'<div class = centerbox><p class = block-text>Press <strong>End Instructions</strong> to continue.</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
};
network_traversal_2_experiment.push(exposure_instructions_block)


var exposure_instructions_block2 = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>Great! Now we’re ready to begin. This portion will take 35 minutes. There will be a 1 minute break roughly every 6 minutes. Afterwards, there will be two short follow-up experiments.</p></div>',
		'<div class = centerbox><p class = block-text>Remember, your job is to keep your eyes on the screen and to press the <strong>LEFT</strong> arrow if the image IS NOT rotated and <strong>RIGHT</strong> arrow if the image IS rotated.</p></div>',
		'<div class = centerbox><p class = block-text>When you’re ready, press <strong>End Instructions</strong> to begin the experiment. Good luck!</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
};
network_traversal_2_experiment.push(exposure_instructions_block2)


var return_incorrect_audio = function() {
	return '/static/experiments/network_traversal_2/sounds/1000_incorrect.mp3'
}

var return_timedout_audio = function() {
	return '/static/experiments/network_traversal_2/sounds/500_timedout.mp3'
}

var get_stim_timing = function() {
	last_trial = jsPsych.data.getLastTrialData().trial_index

	if (jsPsych.data.getDataByTrialIndex(last_trial).trial_type == 'single-audio') {
		rt = jsPsych.data.getDataByTrialIndex(last_trial-1).block_duration
		time_left = 1500 - 250 - rt
	} else {
		rt = jsPsych.data.getDataByTrialIndex(last_trial).block_duration
		time_left = 1500 - rt
	}
	if (time_left === 0) {
		time_left = 1
	}
	return time_left
}

// Create exposure trials
for (i = 0; i < exposure_trials.length; i++) {
	var start_break = {
		type: 'poldrack-text',
		data: {
			trial_id: "start_break",
	    	exp_id: 'network_traversal_2'
		},
		timing_response: 60000,
		timing_stim: 60000,
		cont_key: 'none',
		response_ends_trial: false, 
		text: '<div class = centerbox><p class = center-block-text>This is a 1 minute break!</p></div>',
		timing_post_trial: 0
	}

	var close_break = {
		type: 'poldrack-text',
		data: {
			trial_id: "close_break",
	    	exp_id: 'network_traversal_2'
		},
		text: '<div class = centerbox><p class = center-block-text>Press <strong>enter</strong> to continue the experiment.</p></div>',
		cont_key: [13],
		timing_post_trial: 0
	}

	var stim_pres = {
		type: 'poldrack-categorize',
		stimulus: exposure_trials[i].stimulus,
		is_html: true,
		choices: [37, 39],
		key_answer: exposure_trials[i].key_answer,
		data: {
			trial_id: "test_block",
			exp_id: "network_traversal_2"
		},
		timing_response: 1250,
		response_ends_trial: true,
		timing_post_trial: 0,
		correct_text: '',
		incorrect_text: '',
		timeout_message: ' ',
		prompt: '',
		show_stim_with_feedback: true,	
		show_feedback_on_timeout: true,
		timing_feedback_duration: 1,
		on_finish: function() {
			jsPsych.data.addDataToLastTrial({
				trial_num: current_trial
			})
			current_trial += 1
		}
	}

	var incorrect = {
		type: 'single-audio',
		stimulus: return_incorrect_audio(),
		choices: [37, 39],
		prompt: exposure_trials[i].stimulus,
		timing_post_trial: 0,
		timing_response: 250,
		response_ends_trial: false
	}

	var timedout = {
		type: 'single-audio',
		stimulus: return_timedout_audio(),
		choices: [37, 39],
		prompt: exposure_trials[i].stimulus,
		timing_post_trial: 0,
		timing_response: 250,
		response_ends_trial: false
	}

	var post_audio = {
		type: 'poldrack-single-stim',
		stimulus: exposure_trials[i].stimulus,
		is_html: true,
		choices: [37, 39],
		data: {
			trial_id: "test_block",
			exp_id: "network_traversal_2"
		},
		timing_response: get_stim_timing,
		timing_post_trial: 0,
		response_ends_trial: false
	}


	var if_break = {
		timeline: [start_break, close_break],
		conditional_function: function() {
			if ((current_trial !== 0) & (current_trial % 240 === 0) & (current_trial != 1439)) {
				return true
			} else {
				return false
			}
		}
	}

	var if_incorrect = {
		timeline: [incorrect],
		conditional_function: function() {
			rt = jsPsych.data.getLastTrialData().block_duration
			correct = jsPsych.data.getLastTrialData().correct
			if (!(correct) & (rt < 1250)) {
				return true
			} else {
				return false
			}
		}
	}

	var if_timedout = {
		timeline: [timedout],
		conditional_function: function() {
			rt = jsPsych.data.getLastTrialData().block_duration
			if (rt === 1250) {
				return true
			} else {
				return false
			}
		}
	}

	var exposure_trial = {
		timeline: [stim_pres, if_incorrect, if_timedout, post_audio, if_break]
	}
	network_traversal_2_experiment.push(exposure_trial)
}


var segmentation_instructions = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>Congrats! Well done.</p>' +
		'<p class = block-text>Now, you’ll see a sequence of the same images, but none of them will be rotated. Your job is to press the <strong>spacebar</strong> at times in the sequence that you feel are <strong>natural breaking points</strong>. If you’re not sure, go with your gut feeling. Try to make your responses as quickly and accurately as possible.</p>' +
		'<p class = block-text>Press <strong>End Instructions</strong> to begin.</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
}
network_traversal_2_experiment.push(segmentation_instructions)

current_seg_trial = 0
var segmentation_block = {
	type: 'poldrack-single-stim',
	timeline: seg_trial_list,
	is_html: true,
	choices: [32],
	data: {
		trial_id: "segmentation_block",
		exp_id: "network_traversal_2"
	},
	timing_response: 1500,
	timing_post_trial: 0,
	on_finish: function() {
		jsPsych.data.addDataToLastTrial({
			trial_num: current_seg_trial
		})
		current_seg_trial += 1
	}
}
network_traversal_2_experiment.push(segmentation_block)


var oddmanout_instructions = {
	type: 'poldrack-instructions',
	data: {
		trial_id: "instruction"
	},
	pages: [
		'<div class = centerbox><p class = block-text>Great job!</p>' +
		'<p class = block-text>The stream of images you just saw adhered to a pattern. In other words, some of the images you saw “went together.” We want to see how well you learned that pattern. For each trial, you’ll be presented with three images in random order. We’re interested in whether or not you can pick the single image that DOESN’T belong based on what you just saw in the previous two phases of the experiment.</p>' +
		'<p class = block-text>Press <strong>End Instructions</strong> to begin.</p></div>'
	],
	allow_keys: false,
	show_clickable_nav: true,
	timing_post_trial: 1000
}
network_traversal_2_experiment.push(oddmanout_instructions)


current_oddmanout_trial = 0
for (i = 0; i < oddmanout_trials.length; i++) {
	var oddmanout_block = {
		type: 'poldrack-categorize',
		stimulus: [oddmanout_trials[i].stimulus],
		key_answer: oddmanout_trials[i].key_answer,
		is_html: true,
		choices: [49, 50, 51],
		data: {
			trial_id: "oddmanout_block",
			exp_id: "network_traversal_2"
		},
		timing_response: -1,
		timing_post_trial: 500,
		response_ends_trial: true,
		correct_text: '',
		incorrect_text: '',
		timeout_message: ' ',
		prompt: '',
		show_stim_with_feedback: true,	
		show_feedback_on_timeout: true,
		timing_feedback_duration: 1,
		on_finish: function() {
			jsPsych.data.addDataToLastTrial({
				trial_num: current_oddmanout_trial
			})
			current_oddmanout_trial += 1
			credit_var = 1
		}
	}
	network_traversal_2_experiment.push(oddmanout_block)
}


var end_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "end",
    exp_id: 'network_traversal_2'
  },
  timing_response: 180000,
  text: '<div class = centerbox><p class = center-block-text>Great job!</p><p class = center-block-text>Press <strong>enter</strong> to continue to an exit survey (<strong>note</strong>: your answers on the survey will NOT affect your payment, so please answer as honestly as you can).</p></div>',
  cont_key: [13],
  timing_post_trial: 0
};
network_traversal_2_experiment.push(end_block)


var post_task_block = {
   type: 'survey-text',
   data: {
       trial_id: "post task questions",
       exp_id: 'network_traversal_2'
   },
   questions: ['<p class = center-block-text style = "font-size: 20px">Please summarize what you were asked to do in the main experiment.</p>',
   			  '<p class = center-block-text style = "font-size: 20px">Have you ever participated in an experiment similar to this? If so, please explain.</p>',
   			  '<p class = center-block-text style = "font-size: 20px">How on-task were you, overall, throughout the experiment? (please rate from 1 to 7, where 1 is not on-task at all and 7 is completely on-task).</p>',
   			  '<p class = center-block-text style = "font-size: 20px">How much did you pay attention to the images in the main part of the experiment where you decided whether the images were rotated? (please rate from 1 to 7, where 1 is hardly payed attention and 7 is payed close attention throughout the entirety).</p>',
   			  '<p class = center-block-text style = "font-size: 20px">Please describe any strategies you used during the main rotation experiment.</p>',
   			  '<p class = center-block-text style = "font-size: 20px">Please describe any strategies you used during the portion in which you pressed the spacebar.</p>',
   			  '<p class = center-block-text style = "font-size: 20px">Please describe any strategies you used during the portion in which you chose the image that did not belong.</p>',
   			  '<p class = center-block-text style = "font-size: 20px">What do you think this experiment was testing?</p>',
   			  '<p class = center-block-text style = "font-size: 20px">Do you have any feedback for us?</p>',			  
              '<p class = center-block-text style = "font-size: 20px">Do you have any other comments, questions, or concerns?</p>'],
   rows: [15, 15],
   columns: [60,60]
}
network_traversal_2_experiment.push(post_task_block)