$(document).ready(function() {
  $('.slider').blue_slider({
    slide_template: '10fr .4fr .4fr',
    current_fr_index: 1,
    current_fr_index_flow: false,
    current_fr_class: 'my-fr-current',
    active_fr_class: 'my-fr-active',
    slide_gap: 10,
    ease_function: 'ease-in-out',
    sencitive_drag: 100,
    loop: true,
    auto_play: true,
    auto_play_period: 5000,
    start_slide_index: 1,
    arrows: true,
    prev_arrow: '#main_left_btn',
    next_arrow: '#main_right_btn',
  });
});